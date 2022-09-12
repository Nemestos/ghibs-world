import { Box, createStyles, Overlay, Title } from "@mantine/core";
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
