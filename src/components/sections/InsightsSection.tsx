import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import { INSIGHTS, INSIGHT_CARDS } from "@/constants";
import type { InsightItem, InsightCard } from "@/types";

export default function InsightsSection() {
  const featuredCard = INSIGHT_CARDS.find((card) => card.variant === "wide");
  const supportingCards = INSIGHT_CARDS.filter(
    (card) => card.variant === "narrow",
  );

  return (
    <section
      className="py-16 sm:py-20 lg:py-16 bg-white"
      aria-labelledby="insights-heading"
    >
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* ── Left label ── */}
          <div className="lg:col-span-2 fade-in">
            <div className="relative min-h-[170px] rounded-3xl bg-gray-100 px-8 py-12 sm:px-10 lg:px-10 lg:py-16">
              <div className="absolute bottom-4 left-4 right-8 sm:bottom-6 sm:left-6 sm:right-10">
                <SectionLabel accent={false} className="text-left">
                  <span
                    id="insights-heading"
                    className="text-lg sm:text-xl lg:text-[1.1rem]"
                  >
                    <span className="block">Inspiration &amp;</span>
                    <span className="mt-1 block lg:mt-0.5">Insights</span>
                  </span>
                </SectionLabel>
              </div>
            </div>
          </div>

          {/* ── Insight list ── */}
          <div
            className="lg:col-span-5 flex flex-col gap-8 fade-in"
            style={{ transitionDelay: "100ms" }}
          >
            {INSIGHTS.map((item, index) => (
              <InsightListItem
                key={item.id}
                item={item}
                isLast={index === INSIGHTS.length - 1}
              />
            ))}
          </div>

          {/* ── Cards panel ── */}
          <div
            className="lg:col-span-5 fade-in"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-[2.15fr_0.8fr_0.8fr] gap-4 h-[320px] sm:h-[420px] lg:h-[550px]">
              {featuredCard ? <InsightCardItem card={featuredCard} /> : null}
              {supportingCards.map((card) => (
                <InsightCardItem key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Insight list item ── */
function InsightListItem({
  item,
  isLast,
}: {
  item: InsightItem;
  isLast: boolean;
}) {
  return (
    <article className="group">
      <h3
        className={`font-display font-bold text-xl leading-tight mb-2 ${
          item.isActive ? "text-[#1C4AA0]" : "text-black"
        }`}
      >
        {item.title}
      </h3>
      <p
        className={`text-base leading-relaxed pb-4 ${
          item.isActive ? "text-[#1C4AA0]" : "text-gray-800"
        } ${
          !isLast
            ? item.isActive
              ? "border-b-2 border-[#1C4AA0]"
              : "border-b border-gray-300"
            : ""
        }`}
      >
        {item.description}
      </p>
    </article>
  );
}

/* ── Insight card ── */
function InsightCardItem({ card }: { card: InsightCard }) {
  const isWide = card.variant === "wide";

  return (
    <div className={`insight-card ${isWide ? "" : "hidden sm:block"}`}>
      <div className="relative w-full h-full min-h-[180px] sm:min-h-0 rounded-3xl overflow-hidden">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className={`object-cover ${!isWide ? "opacity-80" : ""}`}
          sizes={
            isWide
              ? "(max-width: 640px) 100vw, 32vw"
              : "(max-width: 640px) 100vw, 14vw"
          }
        />

        {isWide ? (
          <div className="card-label">
            <p className="text-white text-2xl sm:text-[2rem] font-display font-bold mb-1">
              {card.title}
            </p>
            {card.subtitle && (
              <p className="text-white text-sm sm:text-base leading-snug max-w-[26ch]">
                {card.subtitle}
              </p>
            )}
          </div>
        ) : (
          <div className="card-label-v" aria-label={card.title}>
            <span>{card.title}</span>
          </div>
        )}
      </div>
    </div>
  );
}
