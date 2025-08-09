import { useEffect, useRef, useState } from "react";
import * as React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useOutletContext } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getFormationsFromStorage } from "../../../utils/Storage";
export default function AjouterFormateur(){
  const [specialite,setSpecialite]=React.useState();
   const context = useOutletContext();
  console.log("Context reçu:", context); 
  
const [formations, setFormations] = useState([]);

useEffect(() => {
  const data = getFormationsFromStorage();
  setFormations(data);
}, []);
  
  const { onAdd, formateurModifier } = context || {};
  const formateurInitial = formateurModifier;
  
    const nomRef=useRef();
    const prenomRef=useRef();
    const emailRef=useRef();
    const motDePasseRef=useRef();
   
    useEffect(()=>{
      if(formateurInitial){
        nomRef.current.value=formateurInitial.nom;
     prenomRef.current.value=formateurInitial.prenom;
      emailRef.current.value=formateurInitial.email;
      motDePasseRef.current.value=formateurInitial.motDePasse;
      setSpecialite(formateurInitial.specialite);


     }else{
      nomRef.current.value='';
      prenomRef.current.value='';
      emailRef.current.value='';
      motDePasseRef.current.value='';
      setSpecialite('');
     }
    },[formateurInitial])
    const handleSubmit =(e)=>{
      e.preventDefault();
      const nom=nomRef.current.value;
      const prenom=prenomRef.current.value;
      const email=emailRef.current.value;
      const motDePasse=motDePasseRef.current.value;
      
      
      const formateurData={
        id:formateurInitial?.id||Date.now(),
        nom,
        prenom,
        email,
        motDePasse,
        specialite,
      };
      onAdd(formateurData);
       alert(
      !formateurInitial
      ?"✅ Formation ajoutée avec succès !"
      :"✏️ Formation modifiée avec succès !")
    }
    const handleChange=(event)=>{
      setSpecialite(event.target.value);
    }
    return(
       <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Ajouter une formateur
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          id="nom"
          label="Nom"
          inputRef={nomRef}
          fullWidth
        /><br /><br />
        <TextField
          required
          id="prenom"
          label="Prénom"
          inputRef={prenomRef}
          fullWidth
        /><br /><br />
        <TextField
          type='email'
          required
          inputProps={{ min: 1 }}
          id="email"
          label="Email"
          inputRef={emailRef}
          fullWidth
        /> <br /><br />
        <TextField
          type='password'
          required
          id="motDePasse"
          label="Mot de passe"
          inputRef={motDePasseRef}
          InputLabelProps={{ shrink: true }}
          fullWidth
        /><br /><br />
        <FormControl fullWidth>
  <InputLabel id="specialite-label">Spécialité</InputLabel>
  <Select
    labelId="specialite-label"
    id="specialite"
    value={specialite}
    label="Spécialité"
    onChange={handleChange}
  >
    {formations.map((formation, index) => (
      <MenuItem key={index} value={formation.titre}>
        {formation.titre}
      </MenuItem>
    ))}
  </Select>
</FormControl><br />
        <Button variant="contained" type="submit">Ajouter</Button>
      </form>
    </Box>
    )
}