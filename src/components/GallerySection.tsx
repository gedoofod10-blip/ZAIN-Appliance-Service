import React, { useEffect, useState } from 'react';
import { ZoomIn, X, ChevronRight, ChevronLeft, Camera, Info } from 'lucide-react';
import { siteConfig, GalleryItem } from '../config/siteConfig';

type FilterCategory = 'all' | 'inspection' | 'maintenance' | 'after-repair';

const categoryLabels: Record<FilterCategory, string> = {
  all: 'الكل',
  inspection: 'أثناء الفحص',
  maintenance: 'أعمال الصيانة',
  'after-repair': 'بعد الإصلاح',
};

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems: GalleryItem[] =
    activeFilter === 'all'
      ? siteConfig.gallery
      : siteConfig.gallery.filter((item) => item.category === activeFilter);

  const hasIllustrativeOnly =
    filteredItems.length > 0 && filteredItems.every((item) => item.isIllustrative);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredItems.length
        );
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + filteredItems.length) % filteredItems.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const currentLightboxItem =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-14 md:py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0EA5A4]/10 text-[#0B7A79] text-xs sm:text-sm font-bold">
            <Camera className="w-4 h-4" />
            <span>معرض الفحص والصيانة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A]">
            من أعمال مركز زين
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            استعرض مراحل فحص الأجهزة والتعامل مع الأعطال؛ اضغط على أي صورة لتكبيرها وعرض التفاصيل.
          </p>
        </div>

        {/* Honest Transparency Banner if illustrative images are shown */}
        {hasIllustrativeOnly && (
          <div className="max-w-3xl mx-auto mb-8 rounded-2xl bg-[#F6F9FC] border border-slate-200 px-4 py-3 flex items-center justify-center gap-2.5 text-slate-700 text-xs sm:text-sm text-center">
            <Info className="w-4 h-4 text-[#0EA5A4] shrink-0" />
            <span>
              ملاحظة: الصور المعروضة حالياً هي <strong>صور توضيحية</strong> لخطوات الفحص والصيانة، وسيتم تحديثها بصور حقيقية من أعمال المركز فور توفرها.
            </span>
          </div>
        )}

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {(Object.keys(categoryLabels) as FilterCategory[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => {
                setActiveFilter(key);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === key
                  ? 'bg-[#0B1F3A] text-white shadow-sm'
                  : 'bg-[#F6F9FC] text-slate-700 hover:bg-slate-200/70 border border-slate-200'
              }`}
            >
              {categoryLabels[key]}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightboxIndex(idx)}
              className="group relative text-right rounded-3xl overflow-hidden bg-[#F6F9FC] border border-slate-200 shadow-sm hover:shadow-xl transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0EA5A4]"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/85 via-[#0B1F3A]/20 to-transparent" />

                {/* Illustrative Badge vs Real Work Badge */}
                <span
                  className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-bold shadow-sm ${
                    item.isIllustrative
                      ? 'bg-white/95 text-[#0B1F3A]'
                      : 'bg-[#0EA5A4] text-white'
                  }`}
                >
                  {item.isIllustrative ? 'صورة توضيحية' : 'عمل منفذ بالمركز'}
                </span>

                <span className="absolute top-3 left-3 w-9 h-9 rounded-full bg-black/45 backdrop-blur-sm text-white flex items-center justify-center opacity-85 group-hover:opacity-100 group-hover:bg-[#F97316] transition-all">
                  <ZoomIn className="w-4 h-4" />
                </span>

                <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                  <h3 className="text-sm font-extrabold leading-snug">{item.title}</h3>
                  <p className="text-xs text-slate-200 mt-1 line-clamp-2">{item.caption}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentLightboxItem && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={currentLightboxItem.title}
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0B1F3A] rounded-3xl overflow-hidden border border-white/15 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Controls */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 text-white">
              <div className="flex items-center gap-2.5">
                <span className="text-sm sm:text-base font-extrabold">
                  {currentLightboxItem.title}
                </span>
                {currentLightboxItem.isIllustrative && (
                  <span className="px-2.5 py-0.5 rounded-full bg-white/15 text-[#5EEAD4] text-[11px] font-bold">
                    صورة توضيحية
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="إغلاق العرض المكبر"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Container */}
            <div className="relative bg-black flex items-center justify-center max-h-[70vh]">
              <img
                src={currentLightboxItem.image}
                alt={currentLightboxItem.imageAlt}
                className="max-h-[68vh] w-auto object-contain"
              />

              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#F97316] text-white flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="الصورة السابقة"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex((lightboxIndex + 1) % filteredItems.length)
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#F97316] text-white flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="الصورة التالية"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Caption */}
            <div className="px-5 py-4 text-slate-200 text-xs sm:text-sm flex items-center justify-between gap-4">
              <p>{currentLightboxItem.caption}</p>
              <span className="shrink-0 text-xs text-slate-400">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
