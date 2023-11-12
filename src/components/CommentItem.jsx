import React from "react";
import { Grid, Card, CardContent } from "@mui/material";

export const CommentItem = ({ item }) => {
  return (
    <Grid item xs={12}>
      <Card>
        <CardContent>
          <h4>{item.name}</h4>
          <a href={`mailTo:${item.email}`}>{item.email}</a>
          <p>{item.body}</p>
        </CardContent>
      </Card>
    </Grid>
  );
};
