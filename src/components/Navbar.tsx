import React, { useState } from 'react';
import { Menu, X, MessageCircle, Phone, Wrench } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const navLinks = [
  { label: 'الخدمات', href: '#services' },
  { label: 'لماذا مركز زين', href: '#why-us' },
  { label: 'احجز صيانة', href: '#booking' },
  { label: 'من أعمالنا', href: '#gallery' },
  { label: 'الأسئلة الشائعة', href: '#faq' },
  { label: 'الموقع', href: '#location' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const hasConfirmedPhone = Boolean(siteConfig.business.callPhoneNumber.trim());

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0B1F3A]/95 backdrop-blur-md border-b border-white/10 text-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Logo */}
          <a
            href="#top"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label={siteConfig.business.name}
          >
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-[#0EA5A4] to-[#0B7A79] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Wrench className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-extrabold tracking-tight leading-tight text-white">
                {siteConfig.business.shortName}
              </span>
              <span className="text-[11px] md:text-xs font-semibold tracking-wider text-[#2DD4BF] uppercase">
                {siteConfig.business.brandEn}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="التنقل الرئيسي">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-200 hover:text-[#2DD4BF] transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {hasConfirmedPhone && (
              <a
                href={`tel:${siteConfig.business.callPhoneNumber}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors border border-white/15"
              >
                <Phone className="w-4 h-4 text-[#2DD4BF]" />
                <span>اتصل بنا</span>
              </a>
            )}
            <a
              href={siteConfig.business.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white text-sm font-bold shadow-md shadow-orange-950/20 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>تواصل واتساب</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F294A] border-t border-white/10 px-4 pt-3 pb-5 space-y-2">
          <nav className="flex flex-col space-y-1" aria-label="قائمة الجوال">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-100 hover:bg-white/10 hover:text-[#2DD4BF] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href="#booking"
              onClick={handleLinkClick}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>احجز عبر نموذج واتساب</span>
            </a>
            {hasConfirmedPhone && (
              <a
                href={`tel:${siteConfig.business.callPhoneNumber}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 text-white font-semibold text-sm border border-white/15"
              >
                <Phone className="w-4 h-4 text-[#2DD4BF]" />
                <span>اتصل بنا</span>
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
