import Hero from '@/components/home/Hero';
import StatsBar from '@/components/home/StatsBar';
import AboutSnapshot from '@/components/home/AboutSnapshot';
import ProductsPreview from '@/components/home/ProductsPreview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Certifications from '@/components/home/Certifications';
import Testimonials from '@/components/home/Testimonials';
import CTABanner from '@/components/home/CTABanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutSnapshot />
      <ProductsPreview />
      <WhyChooseUs />
      <Certifications />
      <Testimonials />
      <CTABanner />
    </>
  );
}
