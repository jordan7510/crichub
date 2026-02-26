
import Hero from "@/components/Hero/Hero";
import Highlights from "@/components/HighLights/HighLights";
import LiveMatches from "@/components/LiveMatches/LiveMatches";
import Pricing from "@/components/Pricing/Pricing";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden selection:bg-primary/30">
      <main className="grow">
        <Hero />
        <LiveMatches />
        <Highlights />
        <Pricing />
      </main>
    </div>
  );
}
