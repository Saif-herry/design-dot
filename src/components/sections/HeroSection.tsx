import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero-wrap" aria-label="Hero">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/Slider.png"
          alt="HLS Global Group hero banner"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
    </section>
  );
}
