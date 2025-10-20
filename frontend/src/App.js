import React, { useState } from "react";

function App() {
  const [songUrl, setSongUrl] = useState("");
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(30); // default 30 sec loop

  const handlePlayLoop = () => {
    const audio = new Audio(songUrl);
    audio.currentTime = startTime;
    audio.play();

    const loopInterval = setInterval(() => {
      if (audio.currentTime >= endTime) {
        audio.currentTime = startTime;
      }
    }, 500);

    // Stop audio when page unloads
    window.addEventListener("beforeunload", () => {
      audio.pause();
      clearInterval(loopInterval);
    });
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Looper 🎵</h1>
      <input
        type="text"
        placeholder="Enter Spotify / Audio URL"
        value={songUrl}
        onChange={(e) => setSongUrl(e.target.value)}
        style={{ width: "300px", marginRight: "1rem" }}
      />
      <button onClick={handlePlayLoop}>Play Loop</button>
      <div style={{ marginTop: "1rem" }}>
        <label>
          Start Time (sec):{" "}
          <input
            type="number"
            value={startTime}
            onChange={(e) => setStartTime(Number(e.target.value))}
          />
        </label>
        <label style={{ marginLeft: "1rem" }}>
          End Time (sec):{" "}
          <input
            type="number"
            value={endTime}
            onChange={(e) => setEndTime(Number(e.target.value))}
          />
        </label>
      </div>
    </div>
  );
}

export default App;
