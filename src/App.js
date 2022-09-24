import React from "react";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import TrackList from "./components/TrackList";
import Controller from "./components/Controller";

function App() {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <TrackList />
        <Controller />
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
