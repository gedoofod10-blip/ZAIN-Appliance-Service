import React from 'react';
import { MessageSquareHeart, MessageCircle, Quote } from 'lucide-react';
import { siteConfig, buildWhatsAppTextUrl } from '../config/siteConfig';

export const ReviewsSection: React.FC = () => {
  const reviews = siteConfig.customerReviews;
  const feedbackWhatsappUrl = buildWhatsAppTextUrl(
    'مرحباً مركز زين لصيانة الأجهزة المنزلية الكهربائية، أود مشاركة رأيي وتجربتي بعد خدمة الصيانة:'
  );

  return (
    <section id="reviews" className="py-14 md:py-18 bg-[#F6F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1F3A]/5 text-[#0B1F3A] text-xs sm:text-sm font-bold">
            <MessageSquareHeart className="w-4 h-4 text-[#0EA5A4]" />
            <span>تجارب العملاء الحقيقية</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A]">
            آراء عملاء مركز زين
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            نلتزم بنشر المراجعات الحقيقية لعملائنا فقط دون أي تقييمات مصطنعة.
          </p>
        </div>

        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <article
                key={review.id}
                className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between gap-4"
              >
                <div className="space-y-3">
                  <Quote className="w-6 h-6 text-[#0EA5A4]/50" />
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {review.comment}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm">
                  <div>
                    <p className="font-extrabold text-[#0B1F3A]">{review.customerName}</p>
                    <p className="text-slate-500">{review.deviceType}</p>
                  </div>
                  {review.date && <span className="text-slate-400">{review.date}</span>}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 text-center space-y-4 shadow-sm">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-[#0EA5A4]/10 border border-[#0EA5A4]/20 flex items-center justify-center">
              <MessageSquareHeart className="w-7 h-7 text-[#0EA5A4]" />
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#0B1F3A]">
              هذه المساحة مخصصة لعرض آراء العملاء الحقيقية
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              تظهر هنا المراجعات والتجارب الفعلية لعملائنا فور توثيقها بعد إتمام الصيانة. إذا كنت قد تعاملت مع مركز زين مسبقاً، يسعدنا استلام رأيك عبر واتساب.
            </p>
            <div className="pt-2">
              <a
                href={feedbackWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#0B1F3A] hover:bg-[#0EA5A4] text-white font-bold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>شاركنا رأيك عبر واتساب</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
