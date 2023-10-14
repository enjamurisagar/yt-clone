import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { Videos, ChannelCard } from "../components";
import { fetchFromAPI } from "../utils/FetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(
      `search?channelId=${id}&part=snippet&order=date&maxResults=50`
    ).then((data) => setVideos(data?.items));
  }, [id]);
  console.log(videos);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206, 3, 184, 1) 100%, rgba(0,212,255,1) 100%",
            zIndex: 10,
            height: "300px",
          }}
        ></div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "-93px",
          }}
        >
          <ChannelCard channelDetail={channelDetail} />
        </Box>
        <Box display="flex" p="2" mt="30px">
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
