import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";
import Box from "@mui/material/Box";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { Button, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";

const TrackList = () => {
  const { trackList, currentTrackName, playTrack, isPlaying } =
    useMusicPlayer();

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#EEE3F4",
          width: 280,
          height: 65,
          margin: "auto",
          mt: 10,
          display: "flex",
          justifyContent: "center",
          borderRadius: "70px 70px 0px 0px",
        }}
      >
        <Marquee gradient={false} speed={60}>
          {isPlaying ? (
            <Typography variant="h7">
              Now playing: {currentTrackName}
            </Typography>
          ) : (
            ""
          )}
        </Marquee>
      </Box>
      <Box
        sx={{
          backgroundColor: "#DBC4EA",
          width: 280,
          height: 370,
          margin: "auto",
          display: "flex",
          gap: 3,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {trackList.map((track, index) => (
          // ( Surprise us with your code here)
          <Box
            onClick={() => playTrack(index)}
            sx={{
              width: 170,
              height: 50,
              borderRadius: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingLeft: 3,
              backgroundColor: "#EEE3F4",
              "&:hover": {
                backgroundColor: "#ECE1F2",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            {isPlaying ? (
              <Button sx={{ color: "#322F33" }}>
                <PauseCircleIcon sx={{ mr: 3 }} />
              </Button>
            ) : (
              <Button sx={{ color: "#322F33" }}>
                <PlayCircleIcon onClick={playTrack} sx={{ mr: 3 }} />
              </Button>
            )}
            <div className="song-title">{track.name}</div>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default TrackList;
