interface HexLogoProps {
  text?: string;
  className?: string;
}

export default function HexLogo({ text = "DEMO", className = "" }: HexLogoProps) {
  return (
    <div className={`hex-logo ${className}`} style={{ width: 46, height: 52 }}>
      <svg viewBox="0 0 46 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <polygon
          points="23,2 44,13.5 44,38.5 23,50 2,38.5 2,13.5"
          fill="none"
          stroke="#1a1a2e"
          strokeWidth="2"
        />
      </svg>
      <span
        className="relative z-10 text-[#1a1a2e] uppercase font-bold tracking-[0.12em]"
        style={{ fontSize: "0.6rem" }}
      >
        {text}
      </span>
    </div>
  );
}
