import Hero from "@/components/Hero";
// import Featured from "@/components/Featured";
import MenuPreview from "@/components/MenuPreview";
import NewItems from "@/components/NewItems";
import InstagramVideos from "@/components/InstagramVideos";
import OrderOptions from "@/components/OrderOptions";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <Featured /> */}
      <NewItems />
      <MenuPreview />
      <InstagramVideos />
      <OrderOptions />
      <About />
      <Contact />
    </>
  );
}
