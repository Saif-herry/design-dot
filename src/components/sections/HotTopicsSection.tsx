import ArrowIcon from "@/components/ui/ArrowIcon";
import { HOT_TOPICS } from "@/constants";
import type { HotTopic } from "@/types";

export default function HotTopicsSection() {
  return (
    <section
      className="bg-white py-6 sm:py-8"
      aria-label="Hot Topics"
    >
      <div className="container-main flex items-stretch gap-0">
        {/* Orange skewed label */}
        <div className="shrink-0 flex items-center mr-6 sm:mr-10">
          <div
            className="flex items-center px-5 py-2 bg-brand-orange"
            style={{ transform: "skewX(-10deg)" }}
            aria-hidden="true"
          >
            <span
              className="block text-white font-extrabold tracking-[0.18em] uppercase whitespace-nowrap"
              style={{ fontSize: "0.65rem", transform: "skewX(10deg)" }}
            >
              Hot Topics
            </span>
          </div>
        </div>

        {/* 4-column grid */}
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 flex-1 list-none">
          {HOT_TOPICS.map((topic) => (
            <TopicItem key={topic.id} topic={topic} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function TopicItem({ topic }: { topic: HotTopic }) {
  return (
    <li className="px-5 sm:px-6 flex flex-col justify-between gap-4 py-1">
      <div>
        <div className="w-full h-[2px] bg-navy mb-4" aria-hidden="true" />
        <p className="text-gray-800 text-sm leading-snug">{topic.text}</p>
      </div>
      <button
        className="self-end text-gray-800 hover:text-brand-orange transition-colors"
        aria-label={`Read more about: ${topic.text}`}
      >
        <ArrowIcon />
      </button>
    </li>
  );
}
