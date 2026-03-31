import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/constants";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#123E93]"
      aria-label="Hero"
    >
      {/* Background organic curved polygon shapes */}
      <div
        className="absolute bottom-0 left-0 h-full w-full opacity-20 lg:opacity-30"
        aria-hidden="true"
      >
        <div
          className="absolute -left-[10%] -top-[20%] h-[140%] w-[80%] rounded-full bg-white/5"
          style={{
            clipPath:
              "polygon(0% 0%, 90% 15%, 80% 40%, 70% 70%, 30% 85%, 0% 80%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 h-full w-full"
          style={{
            background: "linear-gradient(135deg, #0f3170 0%, #123E93 100%)",
            clipPath:
              "polygon(0% 100%, 0% 30%, 15% 20%, 35% 25%, 50% 15%, 70% 25%, 85% 20%, 100% 30%, 100% 100%)",
          }}
        />
      </div>

      {/* Right section - sharp from bottom-left to curved top-right */}
      <div
        className="absolute inset-y-0 right-0 hidden w-[58%] lg:block"
        aria-hidden="true"
      >
        {/* Main polygon shape container */}
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            clipPath:
              "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 80%, 8% 70%, 12% 55%, 20% 0%)",
          }}
        >
          {/* Background layer with deep blue tint */}
          <div className="absolute inset-0 bg-[#0E3480]/40" />

          {/* Office image */}
          <Image
            src="/hero_img.jpg"
            alt="Modern corporate office with floor-to-ceiling windows and orange accent wall"
            fill
            priority
            sizes="58vw"
            className="object-cover object-center"
          />
        </div>

        {/* Additional curved element at top right for smooth transition */}
        <div
          className="absolute right-0 top-0 h-[180px] w-[180px] rounded-bl-[80px] bg-gradient-to-br from-[#FF8A00]/20 to-transparent"
          style={{
            borderBottomLeftRadius: "80px",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Diagonal sharp accent from bottom left */}
      <div
        className="absolute bottom-0 left-0 hidden h-[200px] w-[200px] lg:block"
        style={{
          background:
            "linear-gradient(45deg, rgba(255,138,0,0.15) 0%, transparent 70%)",
          clipPath: "polygon(0% 100%, 100% 100%, 0% 0%)",
        }}
        aria-hidden="true"
      />

      {/* Mobile background image with overlay */}
      <div className="absolute inset-0 lg:hidden" aria-hidden="true">
        <Image
          src="/hero_img.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-20"
        />
      </div>

      {/* Left content section */}
      <div className="container-main relative z-10 flex min-h-[680px] flex-col justify-between py-16 sm:py-20 lg:min-h-[760px] lg:py-24">
        <div className="max-w-[560px] pt-6 sm:pt-10 lg:pt-24">
          {/* Subtitle with modern pill styling */}
          <p className="mb-5 block w-fit whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.08em] text-[#B8D0FF] backdrop-blur-sm sm:text-[9px]">
            {SITE_CONFIG.tagline}
          </p>

          <div className="inline-block">
            {/* Headline - split into two lines */}
            <h1
              className="font-display text-white uppercase leading-[0.96] tracking-[0.05em]"
              style={{ fontSize: "clamp(1rem, 4vw, 3rem)" }}
            >
              {SITE_CONFIG.heroHeadline.split("\n").map((line, i) => (
                <span key={i} className="block font-black">
                  {line}
                </span>
              ))}
            </h1>

            {/* Orange divider line */}
            <div className="mt-3 h-1 w-full  bg-[#E0ECFF]" />
          </div>

          {/* Description text */}
          <p className="mt-6 max-w-[500px] text-sm leading-7 text-[#E0ECFF] sm:text-[16px]">
            {SITE_CONFIG.heroSubtext}
          </p>

          {/* Orange CTA button with arrow */}
          <Link
            href="#about"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#FF8A00] px-7 py-3.5 text-[8px] font-extrabold uppercase tracking-[0.05em] text-[#0a1f3e] shadow-lg transition-all duration-200 hover:translate-y-[-2px] hover:bg-[#ff9a43] hover:shadow-xl"
          >
            <RightArrowIcon />
            LETS CONNECT
          </Link>
        </div>

        {/* Bottom row with advisory text and badge */}
        <div className="flex flex-col gap-6 pb-4 sm:pb-6 lg:flex-row lg:items-end lg:justify-between">
          {/* Advisory text with orange left border */}
          <p className=" pl-3 text-[11px] font-bold uppercase tracking-[0.04em] text-[#E0ECFF]">
            {SITE_CONFIG.heroBanner}
          </p>

          <ExpertsBadge />
        </div>
      </div>
    </section>
  );
}

function ExpertsBadge() {
  // Avatar images for the badge
  const avatars = [
    { image: "https://randomuser.me/api/portraits/women/44.jpg" },
    { image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { image: "https://randomuser.me/api/portraits/men/68.jpg" },
  ];

  return (
    <div className="flex items-center gap-3 self-start rounded-full bg-white/10 px-2 py-1.5 backdrop-blur-md lg:self-auto">
      <div className="flex -space-x-3" aria-hidden="true">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-lg sm:h-12 sm:w-12"
          >
            <Image
              src={avatar.image}
              alt="Team member"
              fill
              className="object-cover"
            />
          </div>
        ))}
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#FF8A00] text-[10px] font-black uppercase tracking-[0.04em] text-white shadow-lg sm:h-12 sm:w-12 sm:text-xs">
          MORE
        </div>
      </div>

      <div className="leading-tight text-white">
        <p className="text-[1.8rem] font-black text-white sm:text-[2rem]">
          {SITE_CONFIG.expertsCount}
        </p>
        <p className="max-w-[96px] text-[10px] font-medium leading-tight text-white/90 sm:text-[11px]">
          Enjoy Working
          <br />
          with us
        </p>
      </div>
    </div>
  );
}

function RightArrowIcon() {
  return (
    <svg
      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
