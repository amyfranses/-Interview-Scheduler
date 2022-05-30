import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    setMode(newMode);
    if (!replace) {
      setHistory([...history, newMode]);
    } else {
      const historyPrev = history.slice(0, -1);
      setHistory([...historyPrev, newMode]);
    }
  }

  function back() {
    let newHistory = [...history];
    newHistory.pop(mode);
    setHistory(newHistory);
    if (history.length > 1) {
      setMode(newHistory[newHistory.length - 1]);
    }
  }

  return { mode, transition, back };
}
