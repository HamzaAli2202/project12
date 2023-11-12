import React from "react";
import { Grid, Card, CardContent } from "@mui/material";

export const UserItem = ({ item }) => {
  return (
    <Grid item xs={4}>
      <Card sx={{ bgcolor: "greenyellow" }}>
        <CardContent>
          <h4>{item.name}</h4>
          <a href={`mailTo:${item.email}`}>{item.email}</a>
        </CardContent>
      </Card>
    </Grid>
  );
};
