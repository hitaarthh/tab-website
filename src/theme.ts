import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";
export type ThemePreference = Theme | "auto";

const STORAGE_KEY = "the-tab-web-theme";

const LIGHT_START_HOUR = 6;
const LIGHT_END_HOUR = 18;

const RECHECK_INTERVAL_MS = 60_000;

export function resolveByTime(now: Date = new Date()): Theme {
  const h = now.getHours();
  return h >= LIGHT_START_HOUR && h < LIGHT_END_HOUR ? "light" : "dark";
}

function readStoredPreference(): ThemePreference {
  if (typeof window === "undefined") return "auto";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark" || stored === "auto") return stored;
  return "auto";
}

function resolvePreference(pref: ThemePreference): Theme {
  if (pref === "light" || pref === "dark") return pref;
  return resolveByTime();
}

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", theme);
}

export function useTheme() {
  const [preference, setPreferenceState] = useState<ThemePreference>(() =>
    readStoredPreference()
  );
  const [theme, setThemeState] = useState<Theme>(() =>
    resolvePreference(readStoredPreference())
  );

  useEffect(() => {
    const resolved = resolvePreference(preference);
    setThemeState(resolved);
    applyTheme(resolved);
    try {
      window.localStorage.setItem(STORAGE_KEY, preference);
    } catch {
      // Ignore quota / privacy-mode storage errors.
    }
  }, [preference]);

  useEffect(() => {
    if (preference !== "auto") return;

    function tick() {
      const next = resolveByTime();
      setThemeState((prev) => {
        if (prev !== next) applyTheme(next);
        return next;
      });
    }

    const interval = window.setInterval(tick, RECHECK_INTERVAL_MS);
    const onVisibility = () => {
      if (!document.hidden) tick();
    };
    document.addEventListener("visibilitychange", onVisibility);
    tick();

    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [preference]);

  const setPreference = useCallback(
    (next: ThemePreference) => setPreferenceState(next),
    []
  );

  return { preference, theme, setPreference };
}
