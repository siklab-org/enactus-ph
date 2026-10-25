import type { Metadata } from "next";
import KhanAcademyResultsView from "./KhanAcademyResultsView";

export const metadata: Metadata = {
  title: "Khan Academy Challenge Results | National Competition 2026",
  description:
    "View the Top 10 schools and Top 4 awardees in the Khan Academy Challenge at the Enactus Philippines National Competition 2026.",
};

export default function KhanAcademyResultsPage() {
  return (
    <div className="min-h-screen bg-background">
      <KhanAcademyResultsView />
    </div>
  );
}
