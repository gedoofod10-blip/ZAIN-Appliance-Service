export interface ServiceItem {
  id: string;
  name: string;
  deviceTypeOption: string;
  description: string;
  image: string;
  imageAlt: string;
  enabled: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  image: string;
  imageAlt: string;
  category: 'inspection' | 'maintenance' | 'after-repair';
  /** ضع false عند رفع صور حقيقية نفذها المركز فعلياً */
  isIllustrative: boolean;
}

export interface CustomerReview {
  id: string;
  customerName: string;
  deviceType: string;
  comment: string;
  date?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BookingFormData {
  customerName: string;
  phone: string;
  deviceType: string;
  brand: string;
  model: string;
  problemDescription: string;
  address: string;
  preferredTime: string;
  notes: string;
}

/**
 * الإعدادات المركزية لمركز زين لصيانة الأجهزة المنزلية الكهربائية
 * يمكن تحديث جميع البيانات والخدمات وروابط التواصل من هذا الملف فقط.
 */
export const FACEBOOK_PAGE_URL = '';
export const FACEBOOK_MESSENGER_URL = '';

export const siteConfig = {
  business: {
    name: 'مركز زين لصيانة الأجهزة المنزلية الكهربائية',
    shortName: 'مركز زين',
    brandEn: 'ZAIN Appliance Service',
    whatsappDisplay: '+201003772436',
    whatsappWaNumber: '201003772436',
    whatsappDirectUrl: 'https://wa.me/201003772436',
    googleMapsUrl: 'https://maps.app.goo.gl/V3nQusiPcNPSJkgUA',
    /**
     * رقم الاتصال الهاتفي المباشر (اتركه فارغاً لحين إضافة رقم مخصص للاتصال وتأكيده)
     * لن يظهر زر الاتصال في الموقع إلا عند إضافة رقم مؤكد هنا.
     */
    callPhoneNumber: '',
  },

  social: {
    facebookPageUrl: FACEBOOK_PAGE_URL,
    facebookMessengerUrl: FACEBOOK_MESSENGER_URL,
  },

  hero: {
    badge: 'ZAIN Appliance Service',
    title: 'جهازك يستحق العناية والصيانة الصحيحة',
    paragraphs: [
      'في مركز زين لصيانة الأجهزة المنزلية الكهربائية، نساعدك على التعامل مع أعطال أجهزتك المنزلية من خلال خدمات الصيانة والإصلاح.',
      'لا تنتظر حتى يتحول العطل البسيط إلى مشكلة أكبر، تواصل معنا الآن واستفسر عن خدمة الصيانة المناسبة لجهازك.',
    ],
    primaryCtaText: 'احجز عبر واتساب',
    secondaryCtaText: 'تعرف على خدماتنا',
    heroImage: '/images/hero-technician.jpg',
    heroImageAlt: 'فني صيانة أجهزة منزلية كهربائية يفحص غسالة ملابس باستخدام أجهزة القياس الفنية في مركز زين',
  },

  marketing: {
    title: 'حافظ على أجهزتك قبل أن تتحول الأعطال إلى خسائر!',
    paragraphs: [
      'قد يؤدي تجاهل الأعطال البسيطة إلى تلف أجزاء أخرى من الجهاز وارتفاع تكاليف الإصلاح.',
      'الفحص المبكر يساعد على اكتشاف المشكلة وتحديد طريقة التعامل معها قبل تفاقمها.',
      'لا تنتظر توقف جهازك تماماً. اهتم بصيانته مبكراً، وقلل احتمالية تحمل خسائر إضافية.',
    ],
    ctaText: 'اطلب الصيانة عبر واتساب',
    prefilledWhatsappMessage:
      'مرحباً مركز زين لصيانة الأجهزة المنزلية الكهربائية، أرغب في الاستفسار وطلب خدمة فحص وصيانة لجهازي المنزلي.',
  },

  /**
   * قوالب الخدمات المعتمدة: لا يظهر في الموقع إلا الخدمات التي قيمتها enabled: true
   */
  services: [
    {
      id: 'washing-machines',
      name: 'صيانة الغسالات',
      deviceTypeOption: 'غسالة ملابس',
      description:
        'فحص ومعالجة أعطال الغسالات الأوتوماتيك وفوق الأوتوماتيك ومشاكل الصرف والدوران ولوحات التحكم.',
      image: '/images/service-washer.jpg',
      imageAlt: 'صيانة وفحص غسالة ملابس حديثة في مركز زين لصيانة الأجهزة المنزلية',
      enabled: true,
    },
    {
      id: 'refrigerators',
      name: 'صيانة الثلاجات',
      deviceTypeOption: 'ثلاجة / ديب فريزر',
      description:
        'تشخيص وإصلاح أعطال التبريد، التسريب، الثرموستات، وتراكم الثلج في الثلاجات والديب فريزر.',
      image: '/images/service-fridge.jpg',
      imageAlt: 'فحص وصيانة ثلاجة منزلية حديثة للتأكد من كفاءة التبريد',
      enabled: true,
    },
    {
      id: 'air-conditioners',
      name: 'صيانة التكييفات',
      deviceTypeOption: 'تكييف هواء',
      description:
        'فحص وحدات التكييف ومعالجة ضعف التبريد، تسريب المياه، وأعطال التشغيل الكهربائية والميكانيكية.',
      image: '/images/service-ac.jpg',
      imageAlt: 'صيانة وفحص وحدة تكييف هواء منزلية باستخدام معدات القياس',
      enabled: true,
    },
    {
      id: 'water-heaters',
      name: 'صيانة السخانات',
      deviceTypeOption: 'سخان كهربائي',
      description:
        'فحص عناصر التسخين، منظم الحرارة (الثرموستات)، وصمامات الأمان وتوصيلات السخانات الكهربائية.',
      image: '/images/service-heater.jpg',
      imageAlt: 'فحص وصيانة سخان مياه منزلي والتأكد من سلامة التوصيلات',
      enabled: true,
    },
    {
      id: 'ovens',
      name: 'صيانة الأفران',
      deviceTypeOption: 'فرن كهربائي / بوتاجاز',
      description:
        'فحص وإصلاح أعطال الأفران الكهربائية ومشاكل التسخين، المفاتيح، ومنظمات درجات الحرارة.',
      image: '/images/service-oven.jpg',
      imageAlt: 'صيانة وفحص فرن كهربائي منزلي للتأكد من كفاءة عناصر التسخين',
      enabled: true,
    },
    {
      id: 'small-appliances',
      name: 'صيانة الأجهزة الكهربائية الصغيرة',
      deviceTypeOption: 'جهاز كهربائي صغير',
      description:
        'فحص وإصلاح الأجهزة الكهربائية المنزلية الصغيرة مثل الميكروويف، الخلاطات، ومحضرات الطعام.',
      image: '/images/service-small.jpg',
      imageAlt: 'صيانة الأجهزة الكهربائية المنزلية الصغيرة على طاولة فحص فنية',
      enabled: true,
    },
    {
      id: 'diagnostics',
      name: 'فحص وتشخيص الأعطال',
      deviceTypeOption: 'فحص وتشخيص عطل',
      description:
        'فحص فني شامل لتحديد سبب العطل بدقة وتوضيح حالة الجهاز وطريقة التعامل المناسبة معه.',
      image: '/images/service-diagnostics.jpg',
      imageAlt: 'فحص وتشخيص أعطال الدوائر الإلكترونية للأجهزة المنزلية بالملتيميتر',
      enabled: true,
    },
  ] as ServiceItem[],

  whyChooseUs: [
    {
      id: 'easy-request',
      title: 'سهولة طلب الصيانة',
      description: 'خطوات واضحة وبسيطة لتسجيل بيانات جهازك وإرسال الطلب في أقل وقت ممكن.',
    },
    {
      id: 'explain-problem',
      title: 'إمكانية شرح المشكلة قبل طلب الخدمة',
      description: 'يمكنك توضيح الأعراض الظاهرة على الجهاز ومشاركتها معنا عبر واتساب قبل تأكيد الطلب.',
    },
    {
      id: 'whatsapp-contact',
      title: 'سهولة التواصل عبر واتساب',
      description: 'تواصل مباشر وسريع عبر واتساب دون تعقيد أو إجراءات مطولة.',
    },
    {
      id: 'organized-requests',
      title: 'تنظيم طلبات العملاء',
      description: 'تسجيل بيانات الجهاز والموديل والعنوان بشكل منظم لتسهيل المتابعة والتواصل.',
    },
    {
      id: 'care-for-appliances',
      title: 'الاهتمام بالمحافظة على الأجهزة المنزلية',
      description: 'التركيز على التشخيص السليم والتعامل المبكر مع الأعطال للحد من تفاقم المشكلة.',
    },
  ],

  /**
   * معرض أعمال مركز زين:
   * استبدل الصور التالية بصور حقيقية من أعمال المركز، وغيّر isIllustrative إلى false عند إضافتها.
   */
  gallery: [
    {
      id: 'gal-1',
      title: 'توضيح خطوات فحص وحدة التكييف',
      caption: 'صورة توضيحية لعملية فحص ضغط التبريد وسلامة التوصيلات في وحدات التكييف.',
      image: '/images/gallery-inspection-1.jpg',
      imageAlt: 'صورة توضيحية لفحص وحدة تكييف منزلية بأدوات القياس',
      category: 'inspection',
      isIllustrative: true,
    },
    {
      id: 'gal-2',
      title: 'توضيح تجهيز أدوات الفحص والتشخيص',
      caption: 'صورة توضيحية لأدوات الفحص الفني المستخدمة في تشخيص أعطال الأجهزة الكهربائية.',
      image: '/images/gallery-inspection-2.jpg',
      imageAlt: 'صورة توضيحية لأدوات الفحص الفني بجانب لوحة تحكم غسالة',
      category: 'maintenance',
      isIllustrative: true,
    },
    {
      id: 'gal-3',
      title: 'توضيح فحص لوحات التحكم الإلكترونية',
      caption: 'صورة توضيحية لاختبار الدوائر الكهربائية ولوحات التحكم بواسطة أجهزة القياس.',
      image: '/images/service-diagnostics.jpg',
      imageAlt: 'صورة توضيحية لاختبار الدوائر الإلكترونية للأجهزة المنزلية',
      category: 'inspection',
      isIllustrative: true,
    },
    {
      id: 'gal-4',
      title: 'توضيح فحص الغسالات والأجهزة الكبيرة',
      caption: 'صورة توضيحية لفحص الأجزاء الميكانيكية والتوصيلات في الغسالات المنزلية.',
      image: '/images/service-washer.jpg',
      imageAlt: 'صورة توضيحية لفحص غسالة ملابس أوتوماتيك',
      category: 'after-repair',
      isIllustrative: true,
    },
  ] as GalleryItem[],

  /**
   * آراء العملاء الحقيقية:
   * أضف هنا تقييمات العملاء المؤكدة فقط. طالما المصفوفة فارغة، يعرض الموقع رسالة صادقة وجاهزة للتحديث.
   */
  customerReviews: [] as CustomerReview[],

  faqs: [
    {
      id: 'faq-appliances',
      question: 'ما الأجهزة التي يمكن طلب صيانتها؟',
      answer:
        'يمكنك طلب صيانة وفحص الغسالات، الثلاجات، التكييفات، السخانات، الأفران، والأجهزة الكهربائية المنزلية الصغيرة، بالإضافة إلى خدمة فحص وتشخيص الأعطال.',
    },
    {
      id: 'faq-booking',
      question: 'كيف أحجز خدمة الصيانة؟',
      answer:
        'املأ نموذج حجز الصيانة الموجود في هذه الصفحة ببيانات الجهاز ووصف العطل، ثم اضغط على زر إرسال الطلب ليتم فتح محادثة واتساب جاهزة بالبيانات، وسيتواصل معك المركز لتأكيد تفاصيل الطلب.',
    },
    {
      id: 'faq-video',
      question: 'هل يمكن إرسال فيديو للعطل؟',
      answer:
        'نعم، بعد إرسال بيانات الطلب عبر واتساب يمكنك إرفاق صورة أو مقطع فيديو قصير يوضح العطل الظاهر على الجهاز لمساعدتنا في فهم المشكلة بشكل أوضح.',
    },
    {
      id: 'faq-cost',
      question: 'كيف أستفسر عن تكلفة الإصلاح؟',
      answer:
        'يمكنك الاستفسار مباشرة عبر واتساب مع ذكر نوع الجهاز والموديل ووصف المشكلة، وسيتم توضيح الإجراءات المتاحة بعد الاطلاع على تفاصيل العطل أو الفحص الفني.',
    },
    {
      id: 'faq-home-service',
      question: 'هل تتوفر خدمة الصيانة المنزلية؟',
      answer:
        'عند تسجيل طلبك عبر نموذج الحجز، يمكنك كتابة المنطقة والعنوان ونوع الجهاز، وسيقوم المركز بالتواصل معك لتوضيح إمكانية الفحص المنزلي أو الترتيب الأنسب حسب طبيعة العطل.',
    },
    {
      id: 'faq-location',
      question: 'كيف أصل إلى المركز؟',
      answer:
        'يمكنك فتح موقع المركز مباشرة على خرائط Google عبر زر "اعرف موقعنا على الخريطة" في قسم الموقع أسفل الصفحة، أو التواصل معنا عبر واتساب للاستفسار.',
    },
  ] as FaqItem[],
};

/**
 * تجهيز رابط واتساب مع نص رسالة الحجز المُرمّز بشكل صحيح
 */
export function buildWhatsAppBookingUrl(form: BookingFormData): string {
  const safeVal = (val: string) => (val.trim() ? val.trim() : 'غير محدد');

  const lines = [
    'مرحباً مركز زين لصيانة الأجهزة المنزلية الكهربائية.',
    'أرغب في طلب خدمة صيانة.',
    `الاسم: ${safeVal(form.customerName)}`,
    `رقم التواصل: ${safeVal(form.phone)}`,
    `نوع الجهاز: ${safeVal(form.deviceType)}`,
    `الماركة: ${safeVal(form.brand)}`,
    `الموديل: ${safeVal(form.model)}`,
    `وصف المشكلة: ${safeVal(form.problemDescription)}`,
    `المنطقة والعنوان: ${safeVal(form.address)}`,
    `الموعد المفضل: ${safeVal(form.preferredTime)}`,
    `ملاحظات: ${safeVal(form.notes)}`,
    'أرجو التواصل معي لتأكيد تفاصيل الطلب.',
  ];

  const message = lines.join('\n');
  return `https://wa.me/${siteConfig.business.whatsappWaNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * تجهيز رابط واتساب لرسالة استفسار سريعة
 */
export function buildWhatsAppTextUrl(message: string): string {
  return `https://wa.me/${siteConfig.business.whatsappWaNumber}?text=${encodeURIComponent(message)}`;
}
