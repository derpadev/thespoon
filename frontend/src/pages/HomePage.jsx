import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import MenuPreview from "@/components/MenuPreview";
import OrderOptions from "@/components/OrderOptions";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Featured />
      <MenuPreview />
      <OrderOptions />
      <About />
      <Contact />
    </>
  );
}
