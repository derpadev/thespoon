import FeaturedItem from "@/components/FeaturedItem";

export default function Featured() {
  return (
    <section id="featured" className="px-8 py-16 bg-white space-y-8 text-[#333333]">
      <div className="text-center mb-8">
        <p className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm mb-2">
          Fan Favorites
        </p>
        <h3 className="text-gray-800 text-3xl md:text-4xl font-bold">
          Featured Desserts
        </h3>
      </div>

      <FeaturedItem
        title="Nutella Bear"
        description="A decadent, airy Nutella mousse shaped like a bear, with a silky smooth texture and a rich chocolatey flavor that melts in your mouth. Sweet, indulgent, and impossible to resist!"
        image="/bear-removebg-preview.png"
        hoverColor="hover:bg-yellow-800/30"
      />

      <FeaturedItem
        title="Ube Cheesecake"
        description="Creamy cheesecake infused with sweet ube for a silky, lightly nutty dessert with a signature purple glow."
        image="/ube_cheesecake-removebg-preview.png"
        reverse
        hoverColor="hover:bg-purple-800/30"
      />

      <FeaturedItem
        title="Strawberry Mousse"
        description="A fluffy, creamy strawberry dessert bursting with sweet berry flavor."
        image="/strawberry_mousse-removebg-preview.png"
        hoverColor="hover:bg-red-800/50"
      />
    </section>
  );
}
