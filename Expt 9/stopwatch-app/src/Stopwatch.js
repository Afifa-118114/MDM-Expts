import React, { useState, useEffect } from "react";
import "./Stopwatch.css";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (running) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running]);

  return (
    <div className="container">
      <h1 className="title">Stopwatch</h1>

      <div className="time">{time} sec</div>

      <button className="start" onClick={() => setRunning(true)}>
        Start
      </button>

      <button className="stop" onClick={() => setRunning(false)}>
        Stop
      </button>

      <button
        className="reset"
        onClick={() => {
          setTime(0);
          setRunning(false);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Stopwatch;
