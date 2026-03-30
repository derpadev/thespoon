import posts from "@/data/instagramPosts.json";
import { instagramEmbedSrc } from "@/lib/instagramEmbed";

export default function InstagramVideos() {
  const valid = posts.filter(
    (p) => p.permalink && instagramEmbedSrc(p.permalink),
  );

  return (
    <section id="instagram" className="px-8 py-16 bg-[#FFF7E8]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm text-center mb-2">
          Social
        </p>
        <h3 className="text-gray-800 text-3xl md:text-4xl font-bold text-center mb-4">
          From Instagram
        </h3>
        <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">
          Short clips from our kitchen and cafe — follow us for the latest.
        </p>

        {valid.length === 0 ? (
          <p className="text-center text-gray-400 text-sm">
            New reels and posts will show up here soon.
          </p>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2">
            {valid.map((post) => {
              const src = instagramEmbedSrc(post.permalink);
              if (!src) return null;
              return (
                <figure
                  key={post.id}
                  className="rounded-2xl overflow-hidden bg-[#FFF7E8] shadow-md border border-gray-100"
                >
                  {post.title ? (
                    <figcaption className="px-4 py-3 text-sm font-medium text-gray-700 border-b border-gray-100/80">
                      {post.title}
                    </figcaption>
                  ) : null}
                  <div className="relative w-full aspect-[9/16] max-h-[640px] mx-auto bg-black/5">
                    <iframe
                      title={post.title || `Instagram ${post.id}`}
                      src={src}
                      className="absolute inset-0 h-full w-full border-0"
                      allow="encrypted-media; picture-in-picture; clipboard-write"
                      loading="lazy"
                    />
                  </div>
                </figure>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
