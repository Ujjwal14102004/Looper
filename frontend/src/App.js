import { useState, useEffect } from "react";

function App() {
  const [songUrl, setSongUrl] = useState("");
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(30);
  const [loops, setLoops] = useState([]);

  // Fetch loops from backend
  const fetchLoops = async () => {
    const res = await fetch("http://127.0.0.1:8000/loops/");
    const data = await res.json();
    setLoops(data);
  };

  useEffect(() => {
    fetchLoops();
  }, []);

  const saveLoop = async () => {
    const res = await fetch("http://127.0.0.1:8000/loops/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: "testuser",
        song_url: songUrl,
        start_time: parseFloat(startTime),
        end_time: parseFloat(endTime),
      }),
    });
    await res.json();
    fetchLoops(); // refresh list
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Looper MVP</h1>

      <input
        type="text"
        placeholder="Song URL"
        value={songUrl}
        onChange={(e) => setSongUrl(e.target.value)}
      />
      <input
        type="number"
        placeholder="Start time (s)"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
      />
      <input
        type="number"
        placeholder="End time (s)"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
      />
      <button onClick={saveLoop}>Save Loop</button>

      <h2>Saved Loops</h2>
      <ul>
        {loops.map((loop, idx) => (
          <li key={idx}>
            {loop.song_url} | {loop.start_time}s - {loop.end_time}s
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;