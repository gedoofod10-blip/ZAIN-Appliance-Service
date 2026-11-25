import React, { useState } from 'react';
import {
  MapPin,
  ExternalLink,
  Share2,
  MessageCircle,
  Copy,
  Check,
  Navigation,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

export const LocationAndSocialSection: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);

  const facebookPageUrl = siteConfig.social.facebookPageUrl.trim();
  const facebookMessengerUrl = siteConfig.social.facebookMessengerUrl.trim();
  const hasFacebookPage = Boolean(facebookPageUrl);
  const hasFacebookMessenger = Boolean(facebookMessengerUrl);

  const currentUrl =
    typeof window !== 'undefined' ? window.location.href : '';

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    currentUrl
  )}`;

  const handleCopySiteUrl = async () => {
    if (!currentUrl) return;
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopiedLink(true);
      window.setTimeout(() => setCopiedLink(false), 2500);
    } catch {
      // Clipboard fallback ignored
    }
  };

  return (
    <section id="location" className="py-14 md:py-20 bg-[#F6F9FC] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Center Location Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0EA5A4]/10 text-[#0B7A79] text-xs sm:text-sm font-bold">
                <MapPin className="w-4 h-4" />
                <span>الموقع الجغرافي للمركز</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A]">
                موقع مركز زين على خرائط Google
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                يمكنك الوصول إلى موقع {siteConfig.business.name} مباشرة عبر خرائط Google، أو التواصل معنا عبر واتساب قبل التوجه للمركز للاستفسار والتنسيق.
              </p>
            </div>

            {/* Clean Visual Map Card */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0B1F3A] to-[#173A69] text-white p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 20% 20%, #2DD4BF 1.5px, transparent 1.5px)',
                  backgroundSize: '20px 20px',
                }}
              />
              <div className="relative flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0EA5A4]/20 border border-[#0EA5A4]/40 flex items-center justify-center shrink-0">
                  <Navigation className="w-6 h-6 text-[#5EEAD4]" />
                </div>
                <div>
                  <p className="font-extrabold text-base sm:text-lg">
                    {siteConfig.business.shortName}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300">
                    اضغط لفتح الموقع في تطبيق Google Maps أو المتصفح
                  </p>
                </div>
              </div>

              <a
                href={siteConfig.business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white font-extrabold text-sm shadow-lg transition-all shrink-0"
              >
                <MapPin className="w-4 h-4" />
                <span>اعرف موقعنا على الخريطة</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Share & Future-Ready Facebook Container */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1F3A]/5 text-[#0B1F3A] text-xs sm:text-sm font-bold">
                <Share2 className="w-4 h-4 text-[#0EA5A4]" />
                <span>مشاركة الموقع والتواصل</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1F3A]">
                شارك الموقع أو تواصل معنا
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed">
                هل تعرف شخصاً يبحث عن صيانة لجهازه المنزلي؟ يمكنك مشاركة رابط الموقع الرسمي لمركز زين على فيسبوك أو نسخه بضغطة واحدة.
              </p>

              {/* Facebook Page Plugin (Only rendered when FACEBOOK_PAGE_URL is configured) */}
              {hasFacebookPage && (
                <div className="rounded-2xl border border-slate-200 overflow-hidden bg-[#F6F9FC] p-3 space-y-3">
                  <div className="w-full overflow-hidden rounded-xl bg-white">
                    <iframe
                      title="صفحة مركز زين على فيسبوك"
                      src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
                        facebookPageUrl
                      )}&tabs=timeline&width=340&height=180&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true`}
                      width="100%"
                      height="180"
                      style={{ border: 'none', overflow: 'hidden' }}
                      scrolling="no"
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-3">
              {/* Conditional Facebook Follow & Messenger Buttons (Hidden when empty) */}
              {hasFacebookPage && (
                <a
                  href={facebookPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#1877F2] hover:bg-[#166FE5] text-white font-bold text-sm transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                  <span>متابعة الصفحة على Facebook</span>
                </a>
              )}

              {hasFacebookMessenger && (
                <a
                  href={facebookMessengerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#0084FF] hover:bg-[#0073E6] text-white font-bold text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>مراسلة عبر Messenger</span>
                </a>
              )}

              {/* Active Facebook Share Button & Copy Link */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={facebookShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#1877F2] hover:bg-[#166FE5] text-white font-bold text-sm transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                  <span>مشاركة على Facebook</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopySiteUrl}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#F6F9FC] hover:bg-slate-200/70 border border-slate-200 text-[#0B1F3A] font-bold text-sm transition-colors cursor-pointer"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>تم نسخ الرابط</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#0EA5A4]" />
                      <span>نسخ رابط الموقع</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={siteConfig.business.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#0B1F3A] hover:bg-[#0EA5A4] text-white font-bold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>تواصل معنا عبر واتساب</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
