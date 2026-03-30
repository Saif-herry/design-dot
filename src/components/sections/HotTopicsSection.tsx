import ArrowIcon from "@/components/ui/ArrowIcon";
import { HOT_TOPICS } from "@/constants";
import type { HotTopic } from "@/types";

export default function HotTopicsSection() {
  return (
    <section className="bg-white py-6 sm:py-8" aria-label="Hot Topics">
      <div className="container-main flex items-start gap-0">
        {/* Orange angled label */}
        <div className="mr-6 flex shrink-0 items-start sm:mr-10">
          <div
            className="flex h-[58px] min-w-[190px] items-center rounded-l-lg rounded-br-lg rounded-tr-lg bg-brand-orange pl-7 pr-12"
            style={{
              clipPath: "polygon(0 0, 88% 0, 100% 100%, 0 100%)",
            }}
            aria-hidden="true"
          >
            <span className="block whitespace-nowrap text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-white">
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
