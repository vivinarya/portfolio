import { NextResponse } from "next/server";

// These should be in .env.local
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;

const getAccessToken = async () => {
  if (!client_id || !client_secret || !refresh_token) {
    return null;
  }

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export async function GET() {
  const tokenResponse = await getAccessToken();

  if (!tokenResponse || tokenResponse.error) {
    console.error("Spotify API: Token access failed", tokenResponse?.error);
    return NextResponse.json({ isPlaying: false, error: "Authentication failed" });
  }

  const { access_token } = tokenResponse;

  try {
    // 1. Try to get currently playing song
    const currentlyPlayingRes = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: { Authorization: `Bearer ${access_token}` },
      cache: 'no-store'
    });

    if (currentlyPlayingRes.status === 200) {
      const song = await currentlyPlayingRes.json();
      if (song.item !== null) {
        return NextResponse.json({
          album: song.item.album.name,
          albumImageUrl: song.item.album.images[0].url,
          artist: song.item.artists.map((_artist: any) => _artist.name).join(", "),
          isPlaying: song.is_playing,
          songUrl: song.item.external_urls.spotify,
          title: song.item.name,
        });
      }
    }

    // 2. If nothing currently playing (204 or item null), get recently played
    const recentlyPlayedRes = await fetch(`${RECENTLY_PLAYED_ENDPOINT}?limit=1`, {
      headers: { Authorization: `Bearer ${access_token}` },
      cache: 'no-store'
    });

    if (recentlyPlayedRes.status === 200) {
      const recentlyPlayed = await recentlyPlayedRes.json();
      if (recentlyPlayed.items && recentlyPlayed.items.length > 0) {
        const lastTrack = recentlyPlayed.items[0].track;
        return NextResponse.json({
          album: lastTrack.album.name,
          albumImageUrl: lastTrack.album.images[0].url,
          artist: lastTrack.artists.map((_artist: any) => _artist.name).join(", "),
          isPlaying: false,
          songUrl: lastTrack.external_urls.spotify,
          title: lastTrack.name,
          isRecentlyPlayed: true,
        });
      }
    }

    console.log("Spotify API: No current or recent tracks found");
  } catch (err) {
    console.error("Spotify API: Fetch error", err);
  }

  return NextResponse.json({ isPlaying: false, isRecentlyPlayed: false });
}
