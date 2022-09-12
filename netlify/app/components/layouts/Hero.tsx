import {
  Box,
  Button,
  createStyles,
  Overlay,
  Paper,
  Title,
} from "@mantine/core";
import { useState } from "react";
import ReactPlayer from "react-player";

const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    width: "100%",
    height: "75vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    [`& video`]: {
      objectFit: "cover",
    },
  },
}));

export default function Hero() {
  const { classes } = useStyles();
  const [showVideo, setShowVideo] = useState<boolean>(false);

  const onShowVideo = () => {
    setShowVideo(true);
  };
  if (!showVideo) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Paper>
          <Button onClick={onShowVideo}>Show video</Button>
        </Paper>
      </Box>
    );
  }
  return (
    <Box className={classes.wrapper}>
      <Overlay opacity={0.5} zIndex={3} color="black" sx={{ height: "100%" }} />
      <video
        src="/videos/ghibli.webm"
        loop
        muted
        autoPlay
        width={"100%"}
        height={"100%"}
      />
    </Box>
  );
}
