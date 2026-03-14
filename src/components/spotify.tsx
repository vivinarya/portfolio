"use client";

import React, { useEffect, useState } from "react";

interface SpotifyData {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  songUrl?: string;
}

export const Spotify = () => {
  const [data, setData] = useState<SpotifyData | null>(null);

  useEffect(() => {
    const fetchSpotify = async () => {
      try {
        const res = await fetch("/api/spotify");
        const json = await res.json();
        setData(json);
      } catch (e) {
        console.error("Failed to fetch Spotify status", e);
      }
    };

    fetchSpotify();
    const interval = setInterval(fetchSpotify, 30000); // Update every 30s
    return () => clearInterval(interval);
  }, []);

  if (!data || !data.isPlaying) {
    return (
      <div className="text-xs text-zinc-500 font-mono">
        Currently Listening To: Not Playing
      </div>
    );
  }

  return (
    <div className="text-xs text-zinc-500 font-mono">
      Currently Listening To:{" "}
      <a
        href={data.songUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-300 hover:underline"
      >
        {data.title}
      </a>{" "}
      by <span className="text-zinc-400">{data.artist}</span>
    </div>
  );
};
