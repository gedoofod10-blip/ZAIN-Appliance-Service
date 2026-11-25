import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(siteConfig.faqs[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-14 md:py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0EA5A4]/10 text-[#0B7A79] text-xs sm:text-sm font-bold">
            <HelpCircle className="w-4 h-4" />
            <span>استفسارات شائعة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A]">
            الأسئلة الشائعة
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            إجابات واضحة حول طريقة طلب الصيانة والتواصل مع مركز زين.
          </p>
        </div>

        <div className="space-y-3.5">
          {siteConfig.faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-[#F6F9FC] border-[#0EA5A4]/50 shadow-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${faq.id}`}
                  className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 text-right cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-extrabold text-[#0B1F3A]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0EA5A4] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-panel-${faq.id}`}
                    className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-200/70 pt-3"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
