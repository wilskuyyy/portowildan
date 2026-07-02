"use client";

import React, { useEffect, useRef } from "react";

interface CVModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CVModal({ open, onClose }: CVModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastActiveRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    lastActiveRef.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";

    const dialog = dialogRef.current;
    const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && dialog) {
        const focusable = Array.from(dialog.querySelectorAll<HTMLElement>(focusableSelector));
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
    requestAnimationFrame(() => {
      dialog?.querySelector<HTMLElement>("button")?.focus();
    });

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleKeyDown);
      lastActiveRef.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
    >
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
        onClick={onClose}
      />

      <div
        ref={dialogRef}
        className="animate-modal relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-ui bg-surface shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-border bg-surface px-6 py-5">
          <h2 id="cv-modal-title" className="text-xl font-bold">
            Lihat Resume (CV)
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-2 text-muted transition-colors hover:bg-border hover:text-text"
            aria-label="Tutup"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <p className="mb-5 text-sm text-muted">
            Pilih versi bahasa yang ingin Anda lihat.
          </p>
          <div className="grid gap-3">
            <a
              href="/cv/cv-wildan-id.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border-2 border-border bg-surface p-4 transition-all hover:border-primary hover:bg-primary/5"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-2 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="12" y1="18" x2="12" y2="12" />
                    <polyline points="9 15 12 18 15 15" />
                  </svg>
                </div>
                <div>
                  <p className="text-base font-bold text-text">Bahasa Indonesia</p>
                  <p className="text-xs font-medium text-faint">cv-wildan-id.pdf</p>
                </div>
              </div>
            </a>

            <a
              href="/cv/cv-wildan-en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border-2 border-border bg-surface p-4 transition-all hover:border-primary hover:bg-primary/5"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-2 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="12" y1="18" x2="12" y2="12" />
                    <polyline points="9 15 12 18 15 15" />
                  </svg>
                </div>
                <div>
                  <p className="text-base font-bold text-text">English Version</p>
                  <p className="text-xs font-medium text-faint">cv-wildan-en.pdf</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}