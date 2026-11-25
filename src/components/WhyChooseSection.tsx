import React from 'react';
import {
  ClipboardCheck,
  MessageSquareText,
  MessageCircle,
  FolderKanban,
  ShieldCheck,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const iconMap: Record<string, React.ReactNode> = {
  'easy-request': <ClipboardCheck className="w-6 h-6 text-[#0EA5A4]" />,
  'explain-problem': <MessageSquareText className="w-6 h-6 text-[#0EA5A4]" />,
  'whatsapp-contact': <MessageCircle className="w-6 h-6 text-[#0EA5A4]" />,
  'organized-requests': <FolderKanban className="w-6 h-6 text-[#0EA5A4]" />,
  'care-for-appliances': <ShieldCheck className="w-6 h-6 text-[#0EA5A4]" />,
};

export const WhyChooseSection: React.FC = () => {
  return (
    <section id="why-us" className="py-14 md:py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 md:mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#0B1F3A]/5 text-[#0B1F3A] text-xs sm:text-sm font-bold">
            مزايا التواصل وطلب الخدمة
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A]">
            لماذا تختار مركز زين؟
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            نحرص على تسهيل تواصل العميل وتنظيم طلبات الصيانة بوضوح من الخطوة الأولى.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {siteConfig.whyChooseUs.map((reason, index) => (
            <div
              key={reason.id}
              className="rounded-3xl bg-[#F6F9FC] border border-slate-200/80 p-6 hover:border-[#0EA5A4]/50 hover:bg-white hover:shadow-md transition-all flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#0EA5A4]/10 border border-[#0EA5A4]/20 flex items-center justify-center">
                  {iconMap[reason.id] ?? <ShieldCheck className="w-6 h-6 text-[#0EA5A4]" />}
                </div>
                <span className="text-xs font-extrabold text-slate-400">
                  0{index + 1}
                </span>
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-extrabold text-[#0B1F3A]">{reason.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
