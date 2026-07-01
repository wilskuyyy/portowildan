"use client";

import React, { useEffect, useState, useRef } from "react";

export interface ProjectData {
  title: string;
  desc: string;
  fullDesc: string;
  role: string;
  year: string;
  images: string[];
  githubUrl?: string;
  stats?: string[];
  tags: string[];
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Mengatur aksesibilitas: Lock scroll, ESC key, & Focus Trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
      setTimeout(() => setIsVisible(true), 10);
      setCurrentImage(0);
      
      // Auto-focus ke modal saat terbuka untuk screen reader
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = "unset";
      setIsVisible(false);
    }
    
    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % project.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <div 
      className={`fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${
        isVisible ? "opacity-100 backdrop-blur-sm" : "opacity-0 backdrop-blur-none"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Overlay Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/60 transition-opacity" 
        onClick={onClose} 
        aria-label="Tutup modal"
      />

      {/* Modal Content */}
      <div 
        ref={modalRef}
        tabIndex={-1}
        className={`relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden outline-none transform transition-all duration-300 flex flex-col max-h-[95vh] sm:max-h-[90vh] ${
          isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
        }`}
      >
        {/* Header - Sticky */}
        <div className="flex justify-between items-start sm:items-center p-5 sm:p-6 border-b border-gray-100 bg-white/90 backdrop-blur-md z-10 sticky top-0">
          <div className="pr-4">
            <h3 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-tight">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-primary mt-1.5 font-mono">
              {project.role} • {project.year}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 bg-gray-50 text-gray-500 rounded-full hover:bg-gray-200 hover:text-gray-900 transition-colors shrink-0"
            aria-label="Tutup"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Body - Scrollable */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-8">
          
          {/* Carousel Gambar */}
          {project.images.length > 0 && (
            <div className="relative aspect-video bg-gray-50 rounded-xl overflow-hidden group border border-gray-100">
              <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 font-medium text-sm">
                [ Placeholder UI/Dokumentasi: {project.images[currentImage]} ]
              </div>
              
              {project.images.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/90 backdrop-blur rounded-full text-gray-800 shadow-sm opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity hover:bg-white hover:scale-105" aria-label="Gambar sebelumnya">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
                  </button>
                  <button onClick={nextImage} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/90 backdrop-blur rounded-full text-gray-800 shadow-sm opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity hover:bg-white hover:scale-105" aria-label="Gambar selanjutnya">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, idx) => (
                      <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImage ? "bg-gray-800 w-6" : "bg-gray-400/50 w-2"}`} />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Deskripsi & Detail (Bento-style Split) */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                Tentang Project
              </h4>
              <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                {project.fullDesc}
              </p>
            </div>
            
            <div className="space-y-6 bg-gray-50 p-5 rounded-xl border border-gray-100 h-fit">
              <div>
                <h4 className="text-xs font-bold text-gray-900 mb-3 uppercase tracking-wider font-mono">Tumpukan Teknologi</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span key={t} className="text-[11px] font-semibold text-gray-600 bg-white border border-gray-200 px-2.5 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {project.githubUrl && (
                <div className="pt-4 border-t border-gray-200">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-semibold shadow-sm">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    Lihat Repository
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}