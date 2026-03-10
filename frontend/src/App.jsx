import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Featured from "./components/Featured";

export default function App() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      <Navbar />
      <Hero />
      <Featured />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}