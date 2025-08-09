import { useEffect, useRef, useState } from "react";

import { TextField, Button, Box, Typography, FormControl, InputLabel, Select, MenuItem, TextareaAutosize } from '@mui/material';
import ListeFormationData from "../../../Data/Formation";
import { useOutletContext } from "react-router-dom";
import * as React from 'react';
import { getFormationsFromStorage } from "../../../utils/Storage";
export default function AjouterContenu() {
  const [specialite,setSpecialite]=React.useState();
  const [formations, setFormations] = useState([]);
   const context = useOutletContext();
  console.log("Context reçu:", context); 
const [contenu, setContenu] = useState([]);

useEffect(() => {
  const data = getFormationsFromStorage();
  setFormations(data);
}, []);
  const { onAdd, contenuModifier } = context || {};
  const contenuInitial = contenuModifier;

  const titreRef = useRef();
  const descriptionRef = useRef();
  const contenuRef = useRef();
  const dureeRef = useRef();



   useEffect(()=>{
      if(contenuInitial){
        titreRef.current.value=contenuInitial.titre;
     descriptionRef.current.value=contenuInitial.description;
      contenuRef.current.value=contenuInitial.contenu;
     dureeRef.current.value=contenuInitial.duree;
      setSpecialite(contenuInitial.specialite);


     }else{
      titreRef.current.value='';
     descriptionRef.current.value='';
      contenuRef.current.value='';
      dureeRef.current.value='';
      setSpecialite('');
     }
    },[contenuInitial])

    const handleSubmit =(e)=>{
      e.preventDefault();
      const titre=titreRef.current.value;
      const description=descriptionRef.current.value;
      const contenu=contenuRef.current.value;
      const duree=dureeRef.current.value;
      
      
      const contenuData={
        id:contenuInitial?.id||Date.now(),
        titre,
        description,
        contenu,
        duree,
        specialite,
      };
      onAdd(contenuData);
       alert(
      !contenuInitial
      ?"✅ Contenu Pédagigique ajouté avec succès !"
      :"✏️ Contenu Pédagigique modifié avec succès !")
    }
    const handleChange=(event)=>{
      setSpecialite(event.target.value);
    }
  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
      
      <form onSubmit={handleSubmit}>
        <TextField
          required
          id="titre"
          label="Titre du contenu"
          inputRef={titreRef}
          fullWidth
          sx={{ mb: 2 }}
        />

        <TextField
          required
          id="description"
          label="Description"
          inputRef={descriptionRef}
          fullWidth
          multiline
          rows={3}
          sx={{ mb: 2 }}
        />

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="formation-label">Formation</InputLabel>
          <Select
            labelId="formation-label"
            id="formation"
            value={formations}
            label="Formation"
            onChange={handleChange}
          >
            {ListeFormationData.map((formation, index) => (
              <MenuItem key={index} value={formation.titre}>
                {formation.titre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          required
          id="duree"
          label="Durée (en heures)"
          type="number"
          inputRef={dureeRef}
          fullWidth
          sx={{ mb: 2 }}
        />

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" gutterBottom>
            Contenu détaillé
          </Typography>
          <TextareaAutosize
            ref={contenuRef}
            minRows={6}
            placeholder="Entrez le contenu pédagogique détaillé..."
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontFamily: 'inherit',
              fontSize: '14px'
            }}
          />
        </Box>

        <Button variant="contained" type="submit">Ajouter</Button>
      </form>
    </Box>
  );
}
