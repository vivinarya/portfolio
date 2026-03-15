"use client";

import React, { useEffect, useState } from "react";

interface SpotifyData {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  songUrl?: string;
  album?: string;
  albumImageUrl?: string;
  isRecentlyPlayed?: boolean;
}

import Image from "next/image";

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
    const interval = setInterval(fetchSpotify, 10000); // Update every 10s
    return () => clearInterval(interval);
  }, []);

  if (!data || (!data.isPlaying && !data.isRecentlyPlayed)) {
    return (
      <div className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-secondary/50 backdrop-blur-sm w-full max-w-sm">
        <div className="h-12 w-12 rounded-lg bg-background flex items-center justify-center text-muted-foreground">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Offline</div>
          <div className="text-sm font-semibold text-foreground/60">Not playing anything</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-secondary/30 backdrop-blur-md w-full max-w-sm hover:border-foreground/20 transition-colors duration-300 group">
      <div className="relative h-12 w-12 rounded-lg overflow-hidden flex-shrink-0 shadow-xl bg-background">
        {data.albumImageUrl ? (
          <Image 
            src={data.albumImageUrl} 
            alt={data.album || "Album Art"} 
            fill
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full bg-muted" />
        )}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </div>
      <div className="flex flex-col min-w-0">
        <div className="flex items-center gap-2">
          {data.isPlaying ? (
            <span className="flex gap-1">
              <span className="w-1 h-3 bg-green-500 animate-[bounce_1s_infinite]"></span>
              <span className="w-1 h-3 bg-green-500 animate-[bounce_1s_infinite_0.2s]"></span>
              <span className="w-1 h-3 bg-green-500 animate-[bounce_1s_infinite_0.4s]"></span>
            </span>
          ) : (
             <div className="w-2 h-2 rounded-full bg-zinc-500" />
          )}
          <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest leading-none">
            {data.isPlaying ? "Spotify" : "Recently Played"}
          </div>
        </div>
        <a
          href={data.songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold text-foreground hover:opacity-70 transition-opacity truncate block mt-1"
        >
          {data.title}
        </a>
        <div className="text-xs text-muted-foreground truncate">{data.artist}</div>
      </div>
    </div>
  );
};
