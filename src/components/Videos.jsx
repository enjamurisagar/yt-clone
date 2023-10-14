import React from "react";
import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "../components";

const Videos = ({ videos, direction }) => {
  if (!videos.length) return "Loading...";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap={3}
    >
      {videos.map((video, index) => (
        <Box key={index}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetail={video} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
