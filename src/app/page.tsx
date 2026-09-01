import { ApplySection } from "@/components/landing/apply-section";
import { Campus } from "@/components/landing/campus";
import { Events } from "@/components/landing/events";
import { Facilities } from "@/components/landing/facilities";
import { Faq } from "@/components/landing/faq";
import { SiteFooter } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { History } from "@/components/landing/history";
import { ImpactStrip } from "@/components/landing/impact";
import { Offer } from "@/components/landing/offer";
import { Tracks } from "@/components/landing/tracks";
import { SiteHeader } from "@/components/site-header";
import { StickyCta } from "@/components/sticky-cta";

export default function HomePage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <Hero />
        <ImpactStrip />
        <Tracks />
        <Offer />
        <Facilities />
        <History />
        <Events />
        <Campus />
        <Faq />
        <ApplySection />
      </main>
      <SiteFooter />
      <StickyCta />
    </div>
  );
}
