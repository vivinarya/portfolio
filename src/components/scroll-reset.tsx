"use client";

import { useEffect, useLayoutEffect } from "react";

export function ScrollReset() {
  useLayoutEffect(() => {
    // Disable automatic scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    
    // Immediate scroll
    window.scrollTo(0, 0);

    // Delayed scroll to catch post-hydration jumps
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
