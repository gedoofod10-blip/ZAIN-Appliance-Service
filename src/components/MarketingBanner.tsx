import React from 'react';
import { AlertTriangle, MessageCircle, FileText } from 'lucide-react';
import { siteConfig, buildWhatsAppTextUrl } from '../config/siteConfig';

export const MarketingBanner: React.FC = () => {
  const directWhatsappUrl = buildWhatsAppTextUrl(siteConfig.marketing.prefilledWhatsappMessage);

  return (
    <section className="py-10 md:py-14 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-l from-[#0B1F3A] to-[#13325C] text-white p-6 sm:p-10 lg:p-12 shadow-xl">
          {/* Decorative Accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-0 w-64 h-64 bg-[#0EA5A4]/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F97316]/20 border border-[#F97316]/40 text-[#FDBA74] text-xs sm:text-sm font-bold">
                <AlertTriangle className="w-4 h-4 text-[#F97316]" />
                <span>تنبيه مهم لأصحاب الأجهزة المنزلية</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold leading-snug text-white">
                {siteConfig.marketing.title}
              </h2>

              <div className="space-y-2 text-slate-200 text-sm sm:text-base leading-relaxed">
                {siteConfig.marketing.paragraphs.map((text, idx) => (
                  <p key={idx}>{text}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#F97316] hover:bg-[#EA580C] text-white font-extrabold text-base shadow-lg shadow-orange-950/30 transition-all text-center"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>{siteConfig.marketing.ctaText}</span>
              </a>

              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm transition-colors text-center"
              >
                <FileText className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                <span>أو سجّل بيانات الجهاز في النموذج</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
