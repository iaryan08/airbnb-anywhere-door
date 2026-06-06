import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airbnb Reimagined - One Prompt. Perfect Trip. Zero Filters.",
  description: "Strategy presentation: Reimagining Airbnb with Generative AI: the Anywhere Door.",
};

export default function DeckLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
