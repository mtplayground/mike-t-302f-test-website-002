import { CallToAction } from "@/components/sections/call-to-action";
import { FeaturesBenefits } from "@/components/sections/features-benefits";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ValueProposition } from "@/components/sections/value-proposition";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <HowItWorks />
      <FeaturesBenefits />
      <CallToAction />
    </>
  );
}
