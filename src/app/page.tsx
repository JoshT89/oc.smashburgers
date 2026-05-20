import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { Tracker } from "@/components/site/tracker";
import { Menu } from "@/components/site/menu";
import { SecretMenu } from "@/components/site/secret-menu";
import { SmashBuilder } from "@/components/site/smash-builder";
import { Story } from "@/components/site/story";
import { FindUs } from "@/components/site/find-us";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Marquee />
        <Tracker />
        <Menu />
        <SecretMenu />
        <SmashBuilder />
        <Story />
        <FindUs />
      </main>
      <Footer />
    </>
  );
}

