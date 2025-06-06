import Header from "@/components/header";
import Hero from "@/components/hero";
import Work from "@/components/work";
import Connect from "@/components/connect";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-8 pb-16 md:pt-16">
      <Header />
      <main>
        <Hero />
        <Work />
        <Connect />
      </main>
    </div>
  );
}
