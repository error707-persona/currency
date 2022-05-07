import { TextField, Box, Button } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { CryptoState } from "./Cryptocontext";
import { login } from "../utils/auth";

const Login = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { alert, setAlert } = CryptoState();

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email, password);
    // if (password !== confirmPassword) {
    //   setAlert({
    //     open: true,
    //     message: "Passwords do no match",
    //     type: "error",
    //   });

    // let success = true;
    // if (success ) handleClose();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          padding: "3rem 2rem",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <TextField
            variant="outlined"
            id="login-email"
            type="email"
            label="Email"
            placeholder="Email"
            color="secondary"
            value={email}
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            variant="outlined"
            id="login-password"
            type="password"
            label="Password"
            placeholder="Password"
            color="secondary"
            value={password}
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>

        <Button variant="contained" type="submit" color="secondary">
          Login
        </Button>
      </Box>
    </form>
  );
};

export default Login;
