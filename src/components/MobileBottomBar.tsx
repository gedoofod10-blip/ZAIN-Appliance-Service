import React from 'react';
import { MessageCircle, Wrench, MapPin } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useMobileKeyboardOpen } from '../hooks/useMobileKeyboardOpen';

export const MobileBottomBar: React.FC = () => {
  const isKeyboardOpen = useMobileKeyboardOpen();

  if (isKeyboardOpen) {
    return null;
  }

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_20px_rgba(11,31,58,0.1)] pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-12 gap-2 px-3 py-2 items-center">
        {/* Prominent WhatsApp Button: احجز الآن */}
        <a
          href={siteConfig.business.whatsappDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-6 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#F97316] hover:bg-[#EA580C] active:scale-[0.98] text-white font-extrabold text-sm shadow-md shadow-orange-500/25 transition-all"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span>احجز الآن</span>
        </a>

        {/* Services Button: استكشف الخدمات */}
        <a
          href="#services"
          className="col-span-3 inline-flex flex-col items-center justify-center gap-0.5 py-2 px-1 rounded-xl text-[#0B1F3A] hover:bg-slate-100 text-[11px] font-bold transition-colors"
        >
          <Wrench className="w-4 h-4 text-[#0EA5A4]" />
          <span className="truncate max-w-full">استكشف الخدمات</span>
        </a>

        {/* Location Button: موقعنا */}
        <a
          href={siteConfig.business.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-3 inline-flex flex-col items-center justify-center gap-0.5 py-2 px-1 rounded-xl text-[#0B1F3A] hover:bg-slate-100 text-[11px] font-bold transition-colors"
        >
          <MapPin className="w-4 h-4 text-[#0EA5A4]" />
          <span className="truncate max-w-full">موقعنا</span>
        </a>
      </div>
    </div>
  );
};
