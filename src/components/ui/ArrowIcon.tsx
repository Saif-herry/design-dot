interface ArrowIconProps {
  className?: string;
  size?: number;
}

export default function ArrowIcon({ className = "", size = 28 }: ArrowIconProps) {
  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 28 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M0 7H26M20 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
