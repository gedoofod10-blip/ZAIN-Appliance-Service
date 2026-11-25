import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useMobileKeyboardOpen } from '../hooks/useMobileKeyboardOpen';

export const FloatingWhatsApp: React.FC = () => {
  const isKeyboardOpen = useMobileKeyboardOpen();
  const hasConfirmedPhone = Boolean(siteConfig.business.callPhoneNumber.trim());

  if (isKeyboardOpen) {
    return null;
  }

  return (
    <div className="fixed bottom-20 left-4 md:bottom-6 md:left-6 z-40 flex flex-col items-start gap-2.5">
      {hasConfirmedPhone && (
        <a
          href={`tel:${siteConfig.business.callPhoneNumber}`}
          aria-label="اتصال هاتفي بمركز زين"
          className="w-12 h-12 md:w-13 md:h-13 rounded-full bg-[#0B1F3A] hover:bg-[#153156] text-white shadow-lg flex items-center justify-center border border-white/20 transition-transform hover:scale-105"
        >
          <Phone className="w-5 h-5 text-[#2DD4BF]" />
        </a>
      )}

      <a
        href={siteConfig.business.whatsappDirectUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب مع مركز زين"
        className="group inline-flex items-center gap-2.5 h-13 md:h-14 px-4 md:px-5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-sm shadow-xl shadow-emerald-900/25 border-2 border-white transition-all hover:scale-105"
      >
        <MessageCircle className="w-6 h-6 shrink-0" />
        <span className="hidden sm:inline">واتساب مباشر</span>
      </a>
    </div>
  );
};
