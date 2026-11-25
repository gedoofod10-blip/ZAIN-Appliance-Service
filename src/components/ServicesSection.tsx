import React from 'react';
import { CalendarCheck, Wrench } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface ServicesSectionProps {
  onBookService: (deviceTypeOption: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookService }) => {
  const activeServices = siteConfig.services.filter((service) => service.enabled);

  if (activeServices.length === 0) {
    return null;
  }

  return (
    <section id="services" className="py-14 md:py-20 bg-[#F6F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0EA5A4]/10 text-[#0B7A79] text-xs sm:text-sm font-bold">
            <Wrench className="w-4 h-4" />
            <span>خدمات الصيانة والإصلاح</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A]">
            خدمات مركز زين للأجهزة المنزلية
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            اختر نوع الجهاز الذي يحتاج إلى فحص أو صيانة، وسيتم تحديده تلقائياً في نموذج الحجز عبر واتساب.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {activeServices.map((service) => (
            <article
              key={service.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#0EA5A4]/40 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/40 via-transparent to-transparent" />
                <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-white/95 text-[#0B1F3A] text-xs font-bold shadow-sm">
                  {service.deviceTypeOption}
                </span>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-5">
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0B1F3A]">
                    {service.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onBookService(service.deviceTypeOption)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-[#0B1F3A] hover:bg-[#F97316] text-white font-bold text-sm transition-colors cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>احجز {service.name}</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
