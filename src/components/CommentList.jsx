import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { CommentItem } from "./CommentItem";
import axios from "axios";

export const CommentList = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setData(result.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <CommentItem item={item} />
      ))}
    </Grid>
  );
};
