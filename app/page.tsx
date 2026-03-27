import { HeroSection } from "@/components/home/HeroSection";
import { StatsBar } from "@/components/home/StatsBar";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { WorkProcess } from "@/components/home/WorkProcess";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Testimonials } from "@/components/home/Testimonials";
import { HomeCTA } from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden pt-0 w-full">
      <HeroSection />
      <StatsBar />
      <FeaturedServices />
      <WorkProcess />
      <FeaturedProducts />
      <Testimonials />
      <HomeCTA />
    </main>
  );
}
