import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { Story } from "@/components/site/story";
import { Menu } from "@/components/site/menu";
import { FindUs } from "@/components/site/find-us";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Marquee />
        <Story />
        <Menu />
        <FindUs />
      </main>
      <Footer />
    </>
  );
}
