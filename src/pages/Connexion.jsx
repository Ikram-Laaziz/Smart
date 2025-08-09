import React, { useRef } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";

export default function Connexion() {
 
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log("Email:", email);
    console.log("Mot de passe:", password);

    alert(`Connexion réussie pour : ${email}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
        backgroundColor: "#f4f4f4"
      }}
    >
      <Paper elevation={3} sx={{ p: 4, width: 350 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Connexion
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            inputRef={emailRef} 
          />
          <TextField
            label="Mot de passe"
            type="password"
            fullWidth
            margin="normal"
            inputRef={passwordRef} 
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Se connecter
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
