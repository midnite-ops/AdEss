const projects = [
  {
    title: "Residential Complex",
    description:
      "An expansive residential complex featuring modern architecture, sustainable design, and community-focused amenities.",
    mediaType: "photo",
    mediaSrc: "/projects/photo-1.jpg",
    poster: "/projects/photo-1.jpg",
    location: "Montserrado County, Liberia",
  },
  {
    title: "Casting of reinforcement concrete floor",
    description:
      "Precision concrete casting to ensure a strong, durable and stable floor structure..",
    mediaType: "video",
    mediaSrc: "https://res.cloudinary.com/dwy1uczdm/video/upload/v1793975694/VIDEO-2026-11-06-15-09-44_e2psht.mp4",
    poster: "/projects/photo-1.jpg",
    location: "Plumas Lakes, California",
  },
  {
    title: "Casting Slab",
    description:
      "A time-lapse video capturing the meticulous process of laying the slab for a multi-story commercial building.",
    mediaType: "video",
    mediaSrc:
      "https://res.cloudinary.com/dwy1uczdm/video/upload/v1793971471/video-1_t2qljb.mp4",
    poster: "/projects/video-1-poster.jpg",
    location: "Montserrado County, Liberia",
  },
  {
    title: "Bridge Construction",
    description:
      "A high-definition video showcasing the construction of a modern bridge, highlighting engineering techniques and safety measures.",
    mediaType: "video",
    mediaSrc:
      "https://res.cloudinary.com/dwy1uczdm/video/upload/v1793971558/video-2_izblrd.mp4",
    poster: "/projects/video-2-poster.jpg",
    location: "San Francisco, USA",
  },
  {
    title: "Commercial Plaza",
    description:
      "A photo gallery of a newly completed commercial plaza, emphasizing its architectural elegance and functional design.",
    mediaType: "photo",
    mediaSrc: "/projects/photo-2.jpg",
    poster: "/projects/photo-2.jpg",
    location: "Chicago, USA",
  },
  {
    title: "Super Structure Elevation",
    description:
      "A multi-storey building taking shape through precise structural engineering and quality construction.",
    mediaType: "photo",
    mediaSrc: "/projects/photo-3.jpg",
    poster: "/projects/photo-3.jpg",
    location: "Miami, USA",
  },
];

const ProjectCard = ({
  title,
  description,
  mediaType,
  mediaSrc,
  mediaAlt,
  poster,
  location,
}) => {
  return (
    <article className="group relative flex aspect-square flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Media Section */}
      <div className="relative h-[58%] w-full shrink-0 overflow-hidden bg-neutral-200">
        {mediaType === "video" ? (
          <video
            src={mediaSrc}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label={`${title} project video`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <img
            src={mediaSrc}
            alt={mediaAlt || title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {/* Media Type Badge */}
        <div className="absolute left-4 top-4 z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/60 px-3 py-1.5 text-[10px] font-semibold tracking-[0.15em] text-white backdrop-blur-md">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                mediaType === "video" ? "bg-red-400" : "bg-white"
              }`}
            />
            {mediaType.toUpperCase()}
          </span>
        </div>

        {/* Bottom Image Gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/30 to-transparent" />
      </div>

      {/* Card Content */}
      <div className="flex h-full flex-1 flex-col justify-center p-5 sm:p-6">
        <h3 className="line-clamp-2 text-lg font-semibold tracking-tight text-neutral-900 sm:text-xl">
          {title}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500">
          {description}
        </p>
        <p className="mt-5 text-xs font-bold text-neutral-400 uppercase tracking-widest">
          {location}
        </p>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
