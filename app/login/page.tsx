"use client";

import React, { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "../../apis/userApi";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { fetchAuthFailure, fetchAuthStart, fetchAuthSuccess } from "@/store/authSlice";
import { useDispatch } from "react-redux";

const Login: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin: FormEventHandler = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }
    
    try {
      dispatch(fetchAuthStart())
      const user = await login(email, password);
      dispatch(fetchAuthSuccess(user));
      router.push("/");
    } catch (error) {
      dispatch(fetchAuthFailure("Failed to login"));
      console.error("Failed to login", error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
