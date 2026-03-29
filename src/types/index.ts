export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  delay?: string;
}

export interface HotTopic {
  id: number;
  text: string;
}

export interface InsightItem {
  id: number;
  title: string;
  description: string;
  isActive?: boolean;
}

export interface InsightCard {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  variant: "wide" | "narrow";
}
