import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";
import Box from "@mui/material/Box";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Button } from "@mui/material";

const Controller = () => {
  const { togglePlay, playPreviousTrack, playNextTrack, isPlaying } =
    useMusicPlayer();

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#EEE3F4",
          width: 280,
          height: 65,
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          borderRadius: "0px 0px 70px 70px",
        }}
      >
        <Button sx={{ color: "#322F33" }}>
          <SkipPreviousIcon
            onClick={playPreviousTrack}
            sx={{ fontSize: 45, opacity: "80%" }}
          />
        </Button>
        {isPlaying ? (
          <Button sx={{ color: "#322F33" }}>
            <PauseCircleIcon
              onClick={togglePlay}
              sx={{ fontSize: 45, opacity: "80%" }}
            />
          </Button>
        ) : (
          <Button sx={{ color: "#322F33" }}>
            <PlayCircleIcon
              onClick={togglePlay}
              sx={{ fontSize: 45, opacity: "80%" }}
            />
          </Button>
        )}
        <Button sx={{ color: "#322F33" }}>
          <SkipNextIcon
            onClick={playNextTrack}
            sx={{ fontSize: 45, opacity: "80%" }}
          />
        </Button>
      </Box>
    </>
  );
};

export default Controller;
