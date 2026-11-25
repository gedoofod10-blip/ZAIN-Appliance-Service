import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MarketingBanner } from './components/MarketingBanner';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { BookingSection } from './components/BookingSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { LocationAndSocialSection } from './components/LocationAndSocialSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export function App() {
  const [selectedDeviceType, setSelectedDeviceType] = useState<string>('');
  const [selectionTimestamp, setSelectionTimestamp] = useState<number>(0);

  const handleBookService = (deviceTypeOption: string) => {
    setSelectedDeviceType(deviceTypeOption);
    setSelectionTimestamp(Date.now());

    const bookingElement = document.getElementById('booking');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F9FC] text-[#0B1F3A]">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <MarketingBanner />
        <ServicesSection onBookService={handleBookService} />
        <WhyChooseSection />
        <BookingSection
          selectedDeviceType={selectedDeviceType}
          selectionTimestamp={selectionTimestamp}
        />
        <GallerySection />
        <ReviewsSection />
        <FaqSection />
        <LocationAndSocialSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </div>
  );
}

export default App;
