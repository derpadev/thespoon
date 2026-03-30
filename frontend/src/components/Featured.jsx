import FeaturedItem from "@/components/FeaturedItem";

export default function Featured() {
  return (
    <section id="featured" className="px-8 py-16 bg-white space-y-8 text-[#333333]">
      <div className="text-center mb-8">
        <p className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm mb-2">
          Coming Soon!
        </p>
        <h3 className="text-gray-800 text-3xl md:text-4xl font-bold">
          New Drinks!
        </h3>
      </div>

      <FeaturedItem
        title="Jasmine Green Tea"
        description=""
        image=""
        hoverColor="hover:bg-green-600/70"
      />

      <FeaturedItem
        title="Taro"
        description=""
        image=""
        reverse
        hoverColor="hover:bg-purple-800/30"
      />

      <FeaturedItem
        title="Hokkaido"
        description=""
        image=""
        hoverColor="hover:bg-blue-800/50"
      />

      <FeaturedItem
        title="Mango"
        description=""
        image=""
        reverse
        hoverColor="hover:bg-orange-600/70"
      />

      <FeaturedItem
        title="Brown Sugar Okinawa"
        description=""
        image=""
        hoverColor="hover:bg-amber-900/70"
      />
    </section>
  );
}
