import React from "react";
import { Grid, Card, CardContent, Rating, Badge } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export const ProductItem = ({ item }) => {
  return (
    <Grid item xs={3}>
      <Card>
        <CardContent>
          <h4>{item.title.slice(0, 25)}</h4>
          <Badge color="primary" badgeContent={`$${item.price}`}>
            <img src={item.image} alt={item.title} />
          </Badge>
          <p>{item.description.slice(0, 50)}</p>
          <ThumbUpIcon sx={{ color: "blue" }} />
          <Rating value={item.rating.rate} />({item.rating.count})
          <h5>{item.category.toUpperCase()}</h5>
        </CardContent>
      </Card>
    </Grid>
  );
};
