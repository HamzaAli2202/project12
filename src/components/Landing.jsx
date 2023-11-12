import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Card, CardContent } from "@mui/material";
import { ProductList } from "./ProductList";
import { ProductItem } from "./ProductItem";
import { Home } from "./Home";
import { NavList } from "./NavList";
import { CategorieList } from "./CategorieList";
import { CommentList } from "./CommentList";
import { PostList } from "./PostList";
import { UserList } from "./UserList";

export const Landing = () => {
  return (
    <div>
      {/* <h1>Landing</h1> */}
      <BrowserRouter>
        <Card sx={{ bgcolor: "lavender" }}>
          <CardContent>
            <NavList />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productlist" element={<ProductList />} />
              {/* <Route path="/productitem" element={<ProductItem />} /> */}
              <Route path="/cat" element={<CategorieList />} />
              <Route path="/comm" element={<CommentList />} />
              <Route path="/post" element={<PostList />} />
              <Route path="/user" element={<UserList />} />
            </Routes>
          </CardContent>
        </Card>
      </BrowserRouter>
    </div>
  );
};
