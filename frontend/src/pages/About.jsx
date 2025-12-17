import { Navbar } from "../components/Navbar";

export const About = () => {
  return (
    <>
      <Navbar />
      <section>
        <div>
          <div className="h-[600px]">
            <img src="/about.jpg" className="w-full h-full object-scale-down" />
          </div>
        </div>
      </section>
    </>
  );
};
