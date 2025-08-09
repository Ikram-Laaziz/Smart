import { useRef } from "react";
import { Box, Typography, TextField, Button ,Avatar,Grid } from "@mui/material";
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const message = messageRef.current.value.trim();

    if (!name || !email || !message) {
      alert("Merci de remplir tous les champs");
      return;
    }

    const contactMessage = {
      id: Date.now(),
      name,
      email,
      message,
      date: new Date().toLocaleDateString()
    };

    
    const existingMessages = JSON.parse(localStorage.getItem("messages") || "[]");
    

    const updatedMessages = [contactMessage, ...existingMessages];
    

    localStorage.setItem("messages", JSON.stringify(updatedMessages));

   
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
    
    alert('Message envoyé avec succès !');
  };

  return (
     <Box >
      <Box sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center', py: 6 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Nous sommes à votre écoute     
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto' }}>
          Notre équipe est disponible pour vous accompagner et répondre à toutes vos demandes. N'hésitez pas à nous contacter !
        </Typography>
      </Box><br/><br/><br/>
      <Grid container spacing={30} justifyContent="center">
    
        <Grid item xs={12} md={4} textAlign="center">
          <Avatar sx={{ bgcolor: 'primary.main', mx: 'auto', mb: 2 }}>
            <LocationOnIcon />
          </Avatar>
          <Typography variant="body1" fontWeight="bold">
             50000 Meknes
          </Typography>
          <Typography variant="body2">
RUE SEBOU , R/ISSMAILIA22 4 ème étage</Typography>
        </Grid>

      
        <Grid item xs={12} md={4} textAlign="center">
          <Avatar sx={{ bgcolor: 'primary.main', mx: 'auto', mb: 2 }}>
            <EmailIcon />
          </Avatar>
          <Typography variant="body1" fontWeight="bold">
            contact@elegance.com
          </Typography>
        </Grid>

       
        <Grid item xs={12} md={4} textAlign="center">
          <Avatar sx={{ bgcolor: 'primary.main', mx: 'auto', mb: 2 }}>
            <PhoneIcon />
          </Avatar>
          <Typography variant="body1" fontWeight="bold">
            +212 6 12 34 56 78
          </Typography>
        </Grid>
      </Grid>
   
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom color='#1976d2'>
        Contactez-nous
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          id="name"
          label="Nom complet"
          inputRef={nameRef}
          fullWidth
        /><br /><br />
        <TextField
          type='email'
          required
          id="email"
          label="Email"
          inputRef={emailRef}
          fullWidth
        /><br /><br />
        <TextField
          required
          id="message"
          label="Message"
          inputRef={messageRef}
          multiline
          rows={4}
          fullWidth
        /><br /><br />
        <Button variant="contained" type="submit">
          Envoyer
        </Button>
      </form>
    </Box> </Box>
  );
}
