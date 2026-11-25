import React from 'react';
import { Wrench, MessageCircle, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const hasConfirmedPhone = Boolean(siteConfig.business.callPhoneNumber.trim());

  return (
    <footer className="bg-[#0B1F3A] text-slate-300 pt-12 pb-24 md:pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-white/10">
          {/* Brand Summary */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0EA5A4] to-[#0B7A79] flex items-center justify-center text-white">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <p className="font-extrabold text-white text-base">
                  {siteConfig.business.shortName}
                </p>
                <p className="text-xs font-semibold text-[#2DD4BF] uppercase tracking-wider">
                  {siteConfig.business.brandEn}
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {siteConfig.business.name}. تواصل معنا عبر واتساب للاستفسار عن صيانة أجهزتك المنزلية أو تسجيل طلب الصيانة بسهولة.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h3 className="text-sm font-extrabold text-white">روابط سريعة</h3>
            <ul className="grid grid-cols-2 gap-2.5 text-sm">
              <li>
                <a href="#services" className="hover:text-[#2DD4BF] transition-colors">
                  خدماتنا
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#2DD4BF] transition-colors">
                  لماذا مركز زين
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#2DD4BF] transition-colors">
                  احجز صيانة
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#2DD4BF] transition-colors">
                  من أعمالنا
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#2DD4BF] transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#2DD4BF] transition-colors">
                  موقعنا
                </a>
              </li>
            </ul>
          </div>

          {/* Confirmed Contact Channels */}
          <div className="space-y-3">
            <h3 className="text-sm font-extrabold text-white">التواصل والموقع</h3>
            <div className="space-y-2.5 text-sm">
              <a
                href={siteConfig.business.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#2DD4BF] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                <span>واتساب الرسمي:</span>
                <span dir="ltr" className="font-bold text-white">
                  {siteConfig.business.whatsappDisplay}
                </span>
              </a>

              {hasConfirmedPhone && (
                <a
                  href={`tel:${siteConfig.business.callPhoneNumber}`}
                  className="flex items-center gap-2.5 hover:text-[#2DD4BF] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                  <span>هاتف الاتصال:</span>
                  <span dir="ltr" className="font-bold text-white">
                    {siteConfig.business.callPhoneNumber}
                  </span>
                </a>
              )}

              <a
                href={siteConfig.business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#2DD4BF] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#F97316] shrink-0" />
                <span>موقع المركز على خرائط Google</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-right">
          <p>
            © {currentYear} {siteConfig.business.name}. جميع الحقوق محفوظة.
          </p>
          <p className="text-slate-400">
            تنويه: إرسال رسالة واتساب لا يعني تأكيد الموعد إلا بعد تواصل المركز مع العميل.
          </p>
        </div>
      </div>
    </footer>
  );
};
