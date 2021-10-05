import { useState } from "react";
export default function useVisualMode(first) {
  const [mode, setMode] = useState(first);
  const [history, setHistory] = useState([first]); // This line is new!
  const transition = (newmode, replace = false) => {
    setMode(newmode);
    const temphistory = [...history];
    if (replace) {
      temphistory[0] = newmode;
      setHistory(temphistory);
    } else {
      setHistory([newmode, ...temphistory]);
    }
  };
  const back = () => {
    if (history.length > 1) {
      setMode(history[1]);
      setHistory(history.slice(1));
    }
  };
  return {
    mode,
    transition,
    back,
  };
}
