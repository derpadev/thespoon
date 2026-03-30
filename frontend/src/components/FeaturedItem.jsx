export default function FeaturedItem({ title, description, image, reverse = false, hoverColor }) {
  return (
    <div
      className={`max-w-6xl mx-auto flex flex-col md:flex-row gap-8 rounded-4xl p-6 ${hoverColor} hover:text-white transition relative`}
    >
      {/* Image */}
      <div
        className={`md:w-1/2 relative flex items-center justify-center ${reverse ? "md:order-2" : ""
          }`}
      >
        {/* <img
          src={image}
          alt={title}
          className="w-3/4 h-auto object-contain rounded-2xl -mt-20"
        /> */}

        {/* Placeholder Image */}
        <div className="w-full h-48 bg-neutral-100 rounded-2xl flex flex-col items-center justify-center text-gray-500">
          <span className="text-2xl">🧋</span>
          <p className="text-sm mt-2">Photo Coming Soon</p>
        </div>


      </div>

      {/* Text */}
      <div
        className={`md:w-1/2 flex flex-col justify-center ${reverse ? "md:order-1" : ""
          }`}
      >
        <h2 className="text-5xl font-bold mb-4">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
} 