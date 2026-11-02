import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "Spotify Rewards – Evaluate & Earn" },
      {
        name: "description",
        content: "Evaluate songs and earn Spotify rewards.",
      },
      { property: "og:title", content: "Spotify Rewards – Evaluate & Earn" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AppPage,
});

function AppPage() {
  const [search, setSearch] = useState<string | null>(null);

  useEffect(() => {
    setSearch(window.location.search);
  }, []);

  if (search === null) return null;

  return (
    <iframe
      src={`/sp/app/app.html${search}`}
      title="Spotify Rewards App"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
      }}
    />
  );
}
