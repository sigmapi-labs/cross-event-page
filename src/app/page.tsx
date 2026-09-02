import { ApplySection } from "@/components/landing/apply-section";
import { Elite } from "@/components/landing/elite";
import { Events } from "@/components/landing/events";
import { Faq } from "@/components/landing/faq";
import { SiteFooter } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { Instructor } from "@/components/landing/instructor";
import { Location } from "@/components/landing/location";
import { Manpower } from "@/components/landing/manpower";
import { Network } from "@/components/landing/network";
import { Results } from "@/components/landing/results";
import { Strategy } from "@/components/landing/strategy";
import { Why } from "@/components/landing/why";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <Hero />
        <Why />
        <Manpower />
        <Events />
        <Instructor />
        <Elite />
        <Results />
        <Strategy />
        <Network />
        <Faq />
        <Location />
        <ApplySection />
      </main>
      <SiteFooter />
    </div>
  );
}
