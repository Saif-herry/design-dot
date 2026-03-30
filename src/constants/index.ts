import type {
  NavItem,
  StatItem,
  HotTopic,
  InsightItem,
  InsightCard,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Who We Serve", href: "#" },
  { label: "Solutions", href: "#" },
  { label: "Resources", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#" },
];

export const COUNTRY_OPTIONS = ["IND", "USA", "JPN", "DEU", "UAE"];

export const LANGUAGE_OPTIONS = ["ENGLISH", "日本語", "DEUTSCH"];

export const HOT_TOPICS: HotTopic[] = [
  {
    id: 1,
    text: "Parliament Introduces Income Tax Bill to Reshape India's Direct Tax Landscape",
  },
  {
    id: 2,
    text: "Indian Export Earnings at Risk as U.S. Tariffs Double to 50%",
  },
  {
    id: 3,
    text: "India Eases Select BIS Norms While Tightening Overall Standards Enforcement",
  },
  {
    id: 4,
    text: "India Modernizes Maritime Law with Carriage of Goods by Sea Bill, 2025",
  },
];

export const STATS: StatItem[] = [
  {
    value: "250+",
    label: "Professional Staff\nMembers Globally",
    delay: "0ms",
  },
  {
    value: "1000+",
    label: "Clients in the HLS\nGlobal Network",
    delay: "100ms",
  },
  {
    value: "35+",
    label: "Years of Experience\nConnecting Japan and the World",
    delay: "200ms",
  },
  {
    value: "15+",
    label: "Countries Covered\nWith Our Alliance Network",
    delay: "300ms",
  },
];

export const INSIGHTS: InsightItem[] = [
  {
    id: 1,
    title: "Pre-market Entry",
    description:
      "Pre-market entry means trading securities before regular market hours to react to overnight news, with lower liquidity and wider spreads.",
    isActive: true,
  },
  {
    id: 2,
    title: "Market Entry",
    description:
      "Research demand, assess competition, choose mode, localize offering, comply regulations, price strategically, partner locally, iterate learning.",
  },
  {
    id: 3,
    title: "Operations",
    description:
      "Planning, organizing, and managing processes to efficiently produce goods or services, ensuring quality, cost-effectiveness, and customer satisfaction.",
  },
  {
    id: 4,
    title: "Growth & Expansion",
    description:
      "Increasing business size, market reach, revenue, and resources to achieve long-term sustainability and competitive advantage.",
  },
];

export const INSIGHT_CARDS: InsightCard[] = [
  {
    id: 1,
    title: "Pre-Market",
    subtitle:
      "Evaluating Supply Chain Readiness Before Committing Capital in Emerging Markets",
    image: "/coins.png",
    variant: "wide",
  },
  {
    id: 2,
    title: "Operations",
    image: "/img1.png",
    variant: "narrow",
  },
  {
    id: 3,
    title: "Growth & Expansion",
    image: "/img2.png",
    variant: "narrow",
  },
];

export const SITE_CONFIG = {
  name: "HLS Global Group",
  tagline: "Accountants and Global Business Advisors",
  heroHeadline: "Empowered\nWorkplaces",
  heroSubtext:
    "By fostering inclusivity, encouraging growth, promoting collaboration, valuing diversity, supporting innovation, and building trust for shared success.",
  heroBanner:
    "Accounting, Taxation, & Business Advisory between India, Japan, and the World",
  aboutDescription: `is an international accounting and business advisory firm with a focus on providing superior services
    in the areas of accounting, tax, audit, advisory, and consulting. Founded in 1990, we pride ourselves
    in delivering the highest levels of quality and customer service while remaining cost-effective.
    We have grown to more than 250 professionals serving clients in the United States, Japan, Mexico,
    India, Germany, and UAE. While catering to the business requirements of Japanese subsidiaries
    operating in the United States, Mexico, India, Germany, and UAE, we also provide comprehensive
    solutions to non-Japanese multinational companies operating in Japan.`,
  expertsCount: "250+",
};
