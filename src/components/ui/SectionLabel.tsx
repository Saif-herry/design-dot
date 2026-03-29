interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
}

export default function SectionLabel({
  children,
  className = "",
  accent = true,
}: SectionLabelProps) {
  return (
    <div className={`flex lg:flex-col items-center lg:items-start gap-3 ${className}`}>
      {accent ? (
        <div className="w-1 h-12 bg-brand-orange hidden lg:block flex-shrink-0" />
      ) : null}
      <h2 className="section-label">{children}</h2>
    </div>
  );
}
