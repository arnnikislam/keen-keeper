import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const tiles = [
  { src: "/images/call.png", alt: "Call", className: "-rotate-6" },
  {
    src: "/images/text.png",
    alt: "Text",
    className: "-translate-y-3 scale-110 bg-white shadow-md",
  },
  { src: "/images/video.png", alt: "Video", className: "rotate-6" },
];

const EmptyTimeline = () => {
  return (
    <div className="my-4 flex min-h-[50vh] items-center justify-center">
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border-2 border-dashed border-[#244D3F]/20 bg-white px-6 py-12 text-center sm:px-10 sm:py-14">
        {/* Soft glow */}
        <div className="pointer-events-none absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#244D3F]/10 blur-3xl" />

        {/* Icon cluster */}
        <div className="relative flex items-center justify-center gap-3 sm:gap-4">
          {tiles.map(({ src, alt, className }) => (
            <div
              key={alt}
              className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-[#244D3F]/10 sm:h-20 sm:w-20 ${className}`}
            >
              <Image
                src={src}
                alt={alt}
                width={40}
                height={40}
                className="h-8 w-8 sm:h-10 sm:w-10"
              />
            </div>
          ))}
        </div>

        {/* Message */}
        <h3 className="relative mt-8 text-xl font-bold text-[#1f2937] sm:text-2xl">
          No check-ins yet
        </h3>
        <p className="relative mx-auto mt-2 max-w-sm text-sm text-[#64748B] sm:text-base">
          Call, text, or video chat with a friend and it will show up here in
          your timeline.
        </p>

        {/* Action */}
        <Link
          href="/"
          className="btn relative mt-8 w-full border-0 bg-[#244D3F] text-white shadow-none hover:bg-[#1c3d32] sm:w-auto sm:px-8"
        >
          <FiArrowLeft size={18} />
          Go to Friends
        </Link>
      </div>
    </div>
  );
};

export default EmptyTimeline;
