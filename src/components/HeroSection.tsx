import React from 'react';
import { MessageCircle, ArrowDown, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-[#0B1F3A] via-[#102A4C] to-[#0B1F3A] text-white pt-8 pb-14 md:pt-14 md:pb-20"
    >
      {/* Subtle Technical Blueprint Grid Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #2DD4BF 1px, transparent 1px), linear-gradient(to bottom, #2DD4BF 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#0EA5A4]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#F97316]/15 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Content (Mobile First: primary headline & CTA immediately visible) */}
          <div className="lg:col-span-7 space-y-5 md:space-y-6 text-right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0EA5A4]/15 border border-[#0EA5A4]/35 text-[#5EEAD4] text-xs md:text-sm font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse" />
              <span>{siteConfig.hero.badge}</span>
              <span className="text-white/40">|</span>
              <span className="text-white/90">{siteConfig.business.shortName}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.25] tracking-tight text-white">
              {siteConfig.hero.title}
            </h1>

            <div className="space-y-3 text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl">
              {siteConfig.hero.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#F97316] hover:bg-[#EA580C] active:scale-[0.99] text-white text-base font-extrabold shadow-lg shadow-orange-950/30 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{siteConfig.hero.primaryCtaText}</span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-base font-bold transition-all"
              >
                <span>{siteConfig.hero.secondaryCtaText}</span>
                <ArrowDown className="w-4 h-4 text-[#2DD4BF]" />
              </a>
            </div>

            {/* Trust Micro-indicators (Strictly truthful operational facts) */}
            <div className="pt-3 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                <span>تنظيم طلبات الصيانة عبر واتساب</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[#F97316] shrink-0" />
                <span>توضيح المشكلة قبل تأكيد الطلب</span>
              </div>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#153156]">
                <img
                  src={siteConfig.hero.heroImage}
                  alt={siteConfig.hero.heroImageAlt}
                  fetchPriority="high"
                  className="w-full h-[270px] sm:h-[360px] lg:h-[430px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/85 via-transparent to-transparent" />

                {/* Clean Technical Caption Strip */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold text-[#5EEAD4]">
                      {siteConfig.business.brandEn}
                    </p>
                    <p className="text-sm sm:text-base font-bold text-white">
                      {siteConfig.business.name}
                    </p>
                  </div>
                  <a
                    href={siteConfig.business.whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0EA5A4] hover:bg-[#0D9488] text-white text-xs sm:text-sm font-bold shadow-md transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>تواصل مباشر</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
