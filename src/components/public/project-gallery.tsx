"use client";

import Image from "next/image";
import { useState } from "react";
import type { Locale } from "@/i18n";

type GalleryImage = {
  id: string;
  url: string;
  altTr: string;
  altEn: string;
};

export function ProjectGallery({ images, locale, title }: { images: GalleryImage[]; locale: Locale; title: string }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selected = selectedIndex === null ? null : images[selectedIndex];

  return (
    <section className="container py-8">
      <h2 className="mb-5 text-3xl font-black">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className="group overflow-hidden rounded-lg border border-slate-200 bg-slate-950/5 p-3 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            aria-label={locale === "tr" ? "Görseli büyüt" : "Open image"}
          >
            <span className="relative block h-[440px] w-full overflow-hidden rounded-md bg-slate-100 sm:h-[520px] lg:h-[460px]">
              <Image
                src={image.url}
                alt={locale === "tr" ? image.altTr : image.altEn}
                fill
                sizes="(min-width: 1024px) 31vw, (min-width: 640px) 48vw, 100vw"
                quality={95}
                className="object-contain transition duration-200 group-hover:scale-[1.015]"
              />
            </span>
          </button>
        ))}
      </div>

      {selected ? (
        <div className="fixed inset-0 z-50 grid bg-slate-950/90 p-3 backdrop-blur-sm sm:p-6" role="dialog" aria-modal="true">
          <button type="button" className="absolute inset-0 cursor-default" aria-label={locale === "tr" ? "Kapat" : "Close"} onClick={() => setSelectedIndex(null)} />
          <div className="relative z-10 mx-auto grid h-full w-full max-w-6xl grid-rows-[auto_1fr] gap-3">
            <div className="flex items-center justify-between gap-3 rounded-lg bg-white/10 px-4 py-3 text-white">
              <div className="min-w-0 truncate text-sm font-bold">{locale === "tr" ? selected.altTr : selected.altEn}</div>
              <button type="button" className="btn min-h-9 border border-white/20 bg-white text-slate-950" onClick={() => setSelectedIndex(null)}>
                {locale === "tr" ? "Kapat" : "Close"}
              </button>
            </div>
            <div className="relative min-h-0 overflow-hidden rounded-lg bg-slate-950">
              <Image
                src={selected.url}
                alt={locale === "tr" ? selected.altTr : selected.altEn}
                fill
                sizes="100vw"
                quality={100}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
