"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../apis/userApi";
import UpdateButton from "../components/UpdateButton";
import {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserFailure,
} from "../store/userSlice";
import { Container, Grid } from "@mui/material";
import withAuth from "@/components/withAuth";
import { RootState } from "@/store/reducers";
import CardList from "@/components/CardList";

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.data);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchUserStart());
      try {
        const data = await fetchUserData("user-id");
        dispatch(fetchUserSuccess(data));
      } catch (error) {
        dispatch(fetchUserFailure("Failed to fetch user data"));
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <Container maxWidth="sm" fixed>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        alignContent={"center"}
        textAlign={"center"}
      >
        <h1>Main Page</h1>
        <UpdateButton />
        <CardList users={users} />
      </Grid>
    </Container>
  );
};

export default withAuth(Main);
