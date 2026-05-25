import type { Metadata } from "next";
import CompetitionsContent from "./competitions-content";

export const metadata: Metadata = {
  title: "Competitions",
  description:
    "Enactus Philippines competitions — from campus qualifiers to the National Expo and World Cup.",
};

export default function Competitions() {
  return <CompetitionsContent />;
}
