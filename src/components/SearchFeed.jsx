import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./index";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/FetchFromAPI";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet,id&q=${searchTerm}&maxResults=50`).then(
      (data) => setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box
      p={2}
      sx={{
        overflowY: "auto",
        height: "90vh",
        flex: 2,
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight="bold"
        mb={2}
        sx={{ color: "#fff" }}
      >
        Search Results for{" "}
        <span style={{ color: "#f31503" }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
