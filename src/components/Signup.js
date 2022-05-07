import React, { useEffect, useState } from "react";
import { Box, TextField, Button } from "@material-ui/core";
import { CryptoState } from "./Cryptocontext";
import { signup } from "../utils/auth";

const Signup = ({ handleClose }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
    const { alert, setAlert } = CryptoState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setAlert({
        open: true,
        message: "Passwords do no match",
        type: "error",
      });

      return;
    }

    signup(username, email, password, (a) => setAlert(a));

    // try{
    //   const result = await createUserWithEmailAndPassword();
    //     console.log(result);
    //     handleClose();
    // }catch(error){
    //   setAlert({
    //     open:true,
    //     message: error.message,
    //     type: "error",
    //   }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {/* Form */}
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
            id="signup-username"
            type="text"
            label="Username"
            placeholder="Username"
            value={username}
            color="secondary"
            fullWidth
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            variant="outlined"
            id="signup-email"
            type="email"
            label="Email"
            placeholder="Email"
            value={email}
            color="secondary"
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            variant="outlined"
            id="signup-password"
            type="password"
            label="Password"
            placeholder="Password"
            color="secondary"
            value={password}
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextField
            variant="outlined"
            id="signup-confirmpassword"
            type="password"
            label="Confirm Password"
            placeholder="Confirm Password"
            color="secondary"
            value={confirmPassword}
            fullWidth
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Box>

        <Button variant="contained" type="submit" color="secondary">
          Register
        </Button>
      </Box>
    </form>
  );
};

export default Signup;
