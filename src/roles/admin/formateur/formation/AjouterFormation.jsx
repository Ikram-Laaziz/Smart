import { useEffect, useRef } from "react";
import { TextField, Button, Box, Typography } from '@mui/material';
import { useOutletContext } from "react-router-dom";

export default function AjouterFormation() {
  const context = useOutletContext();
  console.log("Context reçu:", context); 
  
  const { onAdd, formationModifier } = context || {};
  const formationInitiale = formationModifier;
  
  const titreRef = useRef();
  const descriptionRef = useRef();
  const dureeRef = useRef();
  const date_debutRef = useRef();
  const date_finRef = useRef();
   useEffect(()=>{
    if(formationInitiale){
      titreRef.current.value=formationInitiale.titre;
      descriptionRef.current.value=formationInitiale.description;
      dureeRef.current.value=formationInitiale.duree;
      date_debutRef.current.value=formationInitiale.date_debut;
      date_finRef.current.value=formationInitiale.date_fin;
    }else{
      titreRef.current.value='';
      descriptionRef.current.value='';
      dureeRef.current.value='';
      date_debutRef.current.value='';
      date_finRef.current.value='';
    }
   },[formationInitiale])

  const handleSubmit = (e) => {
    e.preventDefault();
    const titre = titreRef.current.value;
    const description = descriptionRef.current.value;
    const duree = dureeRef.current.value;
    const date_debut = date_debutRef.current.value;
    const date_fin = date_finRef.current.value;

    if (!titre || !description || !duree || !date_debut || !date_fin) {
      alert("🚫 Tous les champs sont obligatoires.");
      return;
    }

    const formationData = {
     id: formationInitiale?.id || Date.now(),
      titre,
      description,
      duree: parseInt(duree),
      date_debut,
      date_fin,
    };
    onAdd(formationData);
    
   
    alert(
      !formationInitiale
      ?"✅ Formation ajoutée avec succès !"
      :"✏️ Formation modifiée avec succès !")
  }


  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Ajouter une formation
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          id="titre"
          label="Titre"
          inputRef={titreRef}
          fullWidth
        /><br /><br />
        <TextField
          required
          id="description"
          label="Description"
          inputRef={descriptionRef}
          fullWidth
        /><br /><br />
        <TextField
          type='number'
          required
          inputProps={{ min: 1 }}
          id="duree"
          label="Durée"
          inputRef={dureeRef}
          fullWidth
        /> <br /><br />
        <TextField
          type='date'
          required
          id="date-debut"
          label="Date Début"
          inputRef={date_debutRef}
          InputLabelProps={{ shrink: true }}
          fullWidth
        /><br /><br />
        <TextField
          type='date'
          required
          id="date-fin"
          label="Date Fin"
          inputRef={date_finRef}
          InputLabelProps={{ shrink: true }}
          fullWidth
        /><br />
        <Button variant="contained" type="submit">Ajouter</Button>
      </form>
    </Box>
  );
}