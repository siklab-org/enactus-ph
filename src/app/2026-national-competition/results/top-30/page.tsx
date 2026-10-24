import type { Metadata } from "next";
import ResultsView from "./ResultsView";

export const metadata: Metadata = {
  title: "Early-Stage Results | National Competition 2026",
  description:
    "Explore the Top 30 projects in the Early-Stage Project Competition Track at the Enactus Philippines National Competition 2026.",
};

export default function Top30ResultsPage() {
  return (
    <div className="min-h-screen bg-background">
      <ResultsView />
    </div>
  );
}
