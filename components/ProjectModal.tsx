"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export interface ProjectData {
  title: string;
  desc: string;
  fullDesc: string;
  role: string;
  year: string;
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
  stats?: string[];
  tags: string[];
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const lastActiveRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;

    lastActiveRef.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    setCurrentImage(0);

    const modal = modalRef.current;
    const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && project.images.length > 1) {
        setCurrentImage((prev) => (prev + 1) % project.images.length);
      }
      if (e.key === "ArrowLeft" && project.images.length > 1) {
        setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
      }
      if (e.key === "Tab" && modal) {
        const focusable = Array.from(modal.querySelectorAll<HTMLElement>(focusableSelector));
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    requestAnimationFrame(() => modal?.querySelector<HTMLElement>("button")?.focus());

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleKeyDown);
      lastActiveRef.current?.focus();
    };
  }, [project, onClose]);

  if (!project) return null;

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % project.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
        onClick={onClose}
      />

      <div
        ref={modalRef}
        className="animate-modal relative z-10 flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-ui bg-surface shadow-2xl"
      >
        <div className="flex shrink-0 items-start justify-between border-b border-border bg-surface px-6 py-5 md:px-8">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-primary">Case Study</p>
            <h2 id="project-modal-title" className="text-2xl font-black md:text-3xl">{project.title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-2 text-muted transition-colors hover:bg-border hover:text-text"
            aria-label="Tutup"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto p-6 md:p-8">
          {project.images.length > 0 && (
            <div className="relative mb-10 overflow-hidden rounded-2xl border border-border bg-black/5 dark:bg-black/40">
              <div className="relative aspect-video w-full sm:aspect-[16/9]">
                <Image
                  src={project.images[currentImage]}
                  alt={`${project.title} screenshot ${currentImage + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition-colors hover:bg-black/80"
                    aria-label="Gambar sebelumnya"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition-colors hover:bg-black/80"
                    aria-label="Gambar selanjutnya"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur">
                    {project.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImage(idx)}
                        aria-label={`Lihat gambar ${idx + 1}`}
                        className={`h-2 rounded-full transition-all ${
                          idx === currentImage ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-8">
              <div>
                <h3 className="mb-4 text-xl font-bold">Deskripsi Teknis</h3>
                <p className="whitespace-pre-wrap text-base leading-relaxed text-muted">
                  {project.fullDesc}
                </p>
              </div>

              {project.stats && project.stats.length > 0 && (
                <div>
                  <h3 className="mb-4 text-lg font-bold">Key Performance</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.stats.map((stat) => (
                      <span key={stat} className="inline-flex rounded-xl border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <aside className="h-fit rounded-2xl border border-border bg-surface-2 p-6">
              <div className="mb-6">
                <p className="text-sm font-bold text-muted">Role</p>
                <p className="mt-1 font-semibold text-text">{project.role}</p>
              </div>

              <div className="mb-8">
                <p className="mb-3 text-sm font-bold text-muted">Stack & Tools</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-md border border-ui bg-surface px-2.5 py-1 text-xs font-semibold text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-text px-4 py-3.5 text-sm font-bold text-bg transition-transform hover:-translate-y-0.5"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    Lihat Repository
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-border bg-surface px-4 py-3.5 text-sm font-bold text-text transition-colors hover:border-primary hover:text-primary"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}