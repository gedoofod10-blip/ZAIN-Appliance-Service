import React, { useEffect, useState } from 'react';
import {
  MessageCircle,
  Send,
  Info,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  AlertCircle,
} from 'lucide-react';
import {
  siteConfig,
  BookingFormData,
  buildWhatsAppBookingUrl,
} from '../config/siteConfig';

interface BookingSectionProps {
  selectedDeviceType: string;
  selectionTimestamp: number;
}

const initialFormState: BookingFormData = {
  customerName: '',
  phone: '',
  deviceType: '',
  brand: '',
  model: '',
  problemDescription: '',
  address: '',
  preferredTime: '',
  notes: '',
};

export const BookingSection: React.FC<BookingSectionProps> = ({
  selectedDeviceType,
  selectionTimestamp,
}) => {
  const [formData, setFormData] = useState<BookingFormData>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [highlightForm, setHighlightForm] = useState(false);
  const [generatedWhatsappUrl, setGeneratedWhatsappUrl] = useState<string>('');
  const [copiedMessage, setCopiedMessage] = useState(false);

  const activeServiceOptions = siteConfig.services
    .filter((s) => s.enabled)
    .map((s) => s.deviceTypeOption);

  useEffect(() => {
    if (selectedDeviceType) {
      setFormData((prev) => ({
        ...prev,
        deviceType: selectedDeviceType,
      }));
      setErrors((prev) => ({ ...prev, deviceType: undefined }));
      setHighlightForm(true);
      const timer = window.setTimeout(() => setHighlightForm(false), 2600);
      return () => window.clearTimeout(timer);
    }
  }, [selectedDeviceType, selectionTimestamp]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof BookingFormData, string>> = {};
    if (!formData.customerName.trim()) {
      nextErrors.customerName = 'يرجى إدخال اسم العميل';
    }
    if (!formData.phone.trim()) {
      nextErrors.phone = 'يرجى إدخال رقم هاتف للتواصل';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      nextErrors.phone = 'يرجى إدخال رقم هاتف صحيح';
    }
    if (!formData.deviceType.trim()) {
      nextErrors.deviceType = 'يرجى اختيار نوع الجهاز';
    }
    if (!formData.problemDescription.trim()) {
      nextErrors.problemDescription = 'يرجى كتابة وصف مختصر للعطل';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const buildPlainMessageText = (data: BookingFormData): string => {
    const safeVal = (val: string) => (val.trim() ? val.trim() : 'غير محدد');
    return [
      'مرحباً مركز زين لصيانة الأجهزة المنزلية الكهربائية.',
      'أرغب في طلب خدمة صيانة.',
      `الاسم: ${safeVal(data.customerName)}`,
      `رقم التواصل: ${safeVal(data.phone)}`,
      `نوع الجهاز: ${safeVal(data.deviceType)}`,
      `الماركة: ${safeVal(data.brand)}`,
      `الموديل: ${safeVal(data.model)}`,
      `وصف المشكلة: ${safeVal(data.problemDescription)}`,
      `المنطقة والعنوان: ${safeVal(data.address)}`,
      `الموعد المفضل: ${safeVal(data.preferredTime)}`,
      `ملاحظات: ${safeVal(data.notes)}`,
      'أرجو التواصل معي لتأكيد تفاصيل الطلب.',
    ].join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const url = buildWhatsAppBookingUrl(formData);
    setGeneratedWhatsappUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = async () => {
    const text = buildPlainMessageText(formData);
    try {
      await navigator.clipboard.writeText(text);
      setCopiedMessage(true);
      window.setTimeout(() => setCopiedMessage(false), 2500);
    } catch {
      // Fallback ignored if clipboard permissions are restricted
    }
  };

  return (
    <section
      id="booking"
      className="py-14 md:py-20 bg-gradient-to-b from-[#F6F9FC] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Side Info Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F97316]/10 text-[#EA580C] text-xs sm:text-sm font-bold">
                <MessageCircle className="w-4 h-4" />
                <span>الحجز المباشر عبر واتساب</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A] leading-snug">
                احجز طلب الصيانة في خطوات بسيطة
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                أدخل بيانات جهازك ووصف العطل، وعند الضغط على زر الإرسال سيتم تجهيز رسالة واتساب
                كاملة بالبيانات وإرسالها مباشرة إلى الرقم الرسمي لمركز زين.
              </p>
            </div>

            {/* Steps Card */}
            <div className="rounded-3xl bg-[#0B1F3A] text-white p-6 space-y-4 shadow-lg">
              <h3 className="text-base sm:text-lg font-extrabold text-[#5EEAD4]">
                كيف يتم تأكيد الطلب؟
              </h3>
              <ol className="space-y-3 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#0EA5A4] text-white text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <span>املأ بيانات الجهاز والعطل والمنطقة في النموذج المقابل.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#0EA5A4] text-white text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <span>اضغط على «إرسال الطلب عبر واتساب» ليتم فتح المحادثة تلقائياً.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#F97316] text-white text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <span>سيقوم مركز زين بمراجعة بياناتك والتواصل معك لتأكيد تفاصيل الطلب والموعد.</span>
                </li>
              </ol>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-300">رقم واتساب الرسمي:</span>
                <a
                  href={siteConfig.business.whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  dir="ltr"
                  className="font-bold text-[#5EEAD4] hover:underline"
                >
                  {siteConfig.business.whatsappDisplay}
                </a>
              </div>
            </div>

            {/* Mandatory Notice Box */}
            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4 flex items-start gap-3 text-amber-950">
              <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-medium leading-relaxed">
                <strong>تنويه مهم:</strong> إرسال رسالة واتساب لا يعني تأكيد الموعد تلقائياً.
                سيقوم المركز بالتواصل معك بعد استلام الرسالة لتأكيد تفاصيل الطلب.
              </p>
            </div>
          </div>

          {/* Booking Form Card */}
          <div className="lg:col-span-7">
            <div
              className={`bg-white rounded-3xl border border-slate-200 shadow-xl p-5 sm:p-8 transition-all ${
                highlightForm ? 'ring-2 ring-[#0EA5A4] highlight-booking-pulse' : ''
              }`}
            >
              {selectedDeviceType && highlightForm && (
                <div className="mb-5 rounded-2xl bg-[#0EA5A4]/10 border border-[#0EA5A4]/30 px-4 py-3 flex items-center gap-2.5 text-[#0B7A79] text-sm font-bold">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>تم تحديد نوع الجهاز تلقائياً: {selectedDeviceType}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* اسم العميل */}
                  <div>
                    <label
                      htmlFor="customerName"
                      className="block text-sm font-bold text-[#0B1F3A] mb-1.5"
                    >
                      اسم العميل <span className="text-[#F97316]">*</span>
                    </label>
                    <input
                      id="customerName"
                      name="customerName"
                      type="text"
                      value={formData.customerName}
                      onChange={handleChange}
                      placeholder="مثال: أحمد محمد"
                      className={`w-full rounded-xl border px-4 py-3 text-sm bg-[#F6F9FC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0EA5A4] transition-all ${
                        errors.customerName ? 'border-red-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.customerName && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.customerName}</span>
                      </p>
                    )}
                  </div>

                  {/* رقم هاتف العميل */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-bold text-[#0B1F3A] mb-1.5"
                    >
                      رقم هاتف العميل <span className="text-[#F97316]">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      dir="ltr"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="01XXXXXXXXX"
                      className={`w-full text-right rounded-xl border px-4 py-3 text-sm bg-[#F6F9FC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0EA5A4] transition-all ${
                        errors.phone ? 'border-red-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                  {/* نوع الجهاز */}
                  <div>
                    <label
                      htmlFor="deviceType"
                      className="block text-sm font-bold text-[#0B1F3A] mb-1.5"
                    >
                      نوع الجهاز <span className="text-[#F97316]">*</span>
                    </label>
                    <select
                      id="deviceType"
                      name="deviceType"
                      value={formData.deviceType}
                      onChange={handleChange}
                      className={`w-full rounded-xl border px-3.5 py-3 text-sm bg-[#F6F9FC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0EA5A4] transition-all ${
                        errors.deviceType ? 'border-red-500' : 'border-slate-300'
                      }`}
                    >
                      <option value="">اختر نوع الجهاز</option>
                      {activeServiceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                      <option value="جهاز كهربائي منزلي آخر">جهاز كهربائي منزلي آخر</option>
                    </select>
                    {errors.deviceType && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.deviceType}</span>
                      </p>
                    )}
                  </div>

                  {/* ماركة الجهاز */}
                  <div>
                    <label
                      htmlFor="brand"
                      className="block text-sm font-bold text-[#0B1F3A] mb-1.5"
                    >
                      ماركة الجهاز
                    </label>
                    <input
                      id="brand"
                      name="brand"
                      type="text"
                      value={formData.brand}
                      onChange={handleChange}
                      placeholder="مثال: LG / Samsung / Toshiba"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm bg-[#F6F9FC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0EA5A4] transition-all"
                    />
                  </div>

                  {/* موديل الجهاز */}
                  <div>
                    <label
                      htmlFor="model"
                      className="block text-sm font-bold text-[#0B1F3A] mb-1.5"
                    >
                      موديل الجهاز
                    </label>
                    <input
                      id="model"
                      name="model"
                      type="text"
                      value={formData.model}
                      onChange={handleChange}
                      placeholder="إن وجد أو رقم السعة"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm bg-[#F6F9FC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0EA5A4] transition-all"
                    />
                  </div>
                </div>

                {/* وصف العطل */}
                <div>
                  <label
                    htmlFor="problemDescription"
                    className="block text-sm font-bold text-[#0B1F3A] mb-1.5"
                  >
                    وصف العطل <span className="text-[#F97316]">*</span>
                  </label>
                  <textarea
                    id="problemDescription"
                    name="problemDescription"
                    rows={3}
                    value={formData.problemDescription}
                    onChange={handleChange}
                    placeholder="اشرح باختصار ما يحدث في الجهاز (مثال: لا يبرد، توقف عن العصر، يصدر صوتاً غير معتاد...)"
                    className={`w-full rounded-xl border px-4 py-3 text-sm bg-[#F6F9FC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0EA5A4] transition-all ${
                      errors.problemDescription ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.problemDescription && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.problemDescription}</span>
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* المنطقة والعنوان */}
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-bold text-[#0B1F3A] mb-1.5"
                    >
                      المنطقة والعنوان
                    </label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="المنطقة / الحي / الشارع"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm bg-[#F6F9FC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0EA5A4] transition-all"
                    />
                  </div>

                  {/* الموعد المفضل */}
                  <div>
                    <label
                      htmlFor="preferredTime"
                      className="block text-sm font-bold text-[#0B1F3A] mb-1.5"
                    >
                      الموعد المفضل
                    </label>
                    <input
                      id="preferredTime"
                      name="preferredTime"
                      type="text"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      placeholder="مثال: غداً مساءً / حسب التوافر"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm bg-[#F6F9FC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0EA5A4] transition-all"
                    />
                  </div>
                </div>

                {/* ملاحظات إضافية */}
                <div>
                  <label
                    htmlFor="notes"
                    className="block text-sm font-bold text-[#0B1F3A] mb-1.5"
                  >
                    ملاحظات إضافية
                  </label>
                  <input
                    id="notes"
                    name="notes"
                    type="text"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="أي تفاصيل إضافية ترغب في إبلاغنا بها"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm bg-[#F6F9FC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0EA5A4] transition-all"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#F97316] hover:bg-[#EA580C] active:scale-[0.99] text-white font-extrabold text-base shadow-lg shadow-orange-500/25 transition-all cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    <span>إرسال الطلب عبر واتساب</span>
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    يعمل مباشرة على تطبيق واتساب في الهاتف وعلى WhatsApp Web في الكمبيوتر
                  </p>
                </div>
              </form>

              {/* Post-Submit Confirmation & Fallback Link */}
              {generatedWhatsappUrl && (
                <div className="mt-6 rounded-2xl bg-emerald-50 border border-emerald-200 p-4 sm:p-5 space-y-3">
                  <div className="flex items-start gap-2.5 text-emerald-900">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="space-y-1 text-sm">
                      <p className="font-extrabold">تم تجهيز رسالة طلب الصيانة بنجاح</p>
                      <p className="text-xs sm:text-sm text-emerald-800">
                        إذا لم يفتح تطبيق واتساب تلقائياً، اضغط على الزر التالي لفتح المحادثة وإرسال الرسالة، علماً بأن المركز سيتواصل معك لاحقاً لتأكيد تفاصيل الطلب.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <a
                      href={generatedWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>فتح واتساب الآن</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white border border-emerald-300 hover:bg-emerald-100/60 text-emerald-900 font-bold text-sm transition-colors cursor-pointer"
                    >
                      {copiedMessage ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span>تم نسخ النص</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>نسخ نص الطلب</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
