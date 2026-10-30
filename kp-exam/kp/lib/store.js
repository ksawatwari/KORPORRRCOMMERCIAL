"use client";
import { createContext, useContext, useEffect, useState, useCallback } from "react";

const Ctx = createContext(null);
const KEY = "kp-exam-state";

export function Provider({ children }) {
  const [state, setState] = useState({ unlocked: {}, done: {}, theme: "light" });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const s = JSON.parse(localStorage.getItem(KEY) || "null");
      if (s) setState((p) => ({ ...p, ...s }));
      else if (window.matchMedia("(prefers-color-scheme: dark)").matches)
        setState((p) => ({ ...p, theme: "dark" }));
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.classList.toggle("dark", state.theme === "dark");
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch {}
  }, [state, ready]);

  const unlock = useCallback((slugs) =>
    setState((p) => ({ ...p, unlocked: { ...p.unlocked, ...Object.fromEntries(slugs.map((s) => [s, true])) } })), []);
  const toggleDone = useCallback((key) =>
    setState((p) => ({ ...p, done: { ...p.done, [key]: !p.done[key] } })), []);
  const toggleTheme = useCallback(() =>
    setState((p) => ({ ...p, theme: p.theme === "dark" ? "light" : "dark" })), []);

  return <Ctx.Provider value={{ ...state, ready, unlock, toggleDone, toggleTheme }}>{children}</Ctx.Provider>;
}

export const useApp = () => useContext(Ctx);
