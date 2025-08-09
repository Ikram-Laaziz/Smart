import { useRef } from "react";
import {Box,Typography,TextField,FormControl,InputLabel,Select,MenuItem,Button} from '@mui/material'

export default function Inscription(){
      const nomRef=useRef();
      const prenomRef = useRef();
      const emailRef = useRef();
      const motDePasseRef = useRef();
      const ageRef = useRef();
      const niveauRef = useRef();
      
      const handleSubmit = (e) => {
    e.preventDefault();

    const nom = nomRef.current.value.trim();
    const prenom = prenomRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const motDePasse = motDePasseRef.current.value.trim();
    const age = ageRef.current.value.trim();
    const niveau = niveauRef.current.value;
    
    if (!nom || !prenom || !email || !motDePasse || !age || !niveau) {
      alert("Merci de remplir tous les champs");
      return;
    }

    const demande = {
      id: Date.now(),
      nom,
      prenom,
      email,
      motDePasse,
      age,
      niveau,
      statut: "en attente",
      role:'apprenant',
    };

    // Récupérer les demandes existantes
    const existingDemandes = JSON.parse(localStorage.getItem("demandes") || "[]");
    
    // Ajouter la nouvelle demande
    const updatedDemandes = [demande, ...existingDemandes];
    
    // Sauvegarder dans localStorage
    localStorage.setItem("demandes", JSON.stringify(updatedDemandes));

    // Réinitialiser le formulaire
    nomRef.current.value = "";
    prenomRef.current.value = "";
    emailRef.current.value = "";
    motDePasseRef.current.value = "";
    ageRef.current.value = "";
    niveauRef.current.value = "";
    
    alert('Demande d\'inscription envoyée avec succès !');
  };
    return(
         <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom  color='#1976d2'>
       Faire une demande d'inscription
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
         <TextField
          
          required
          id="age"
          label="Age"
          inputRef={ageRef}
          InputLabelProps={{ shrink: true }}
          fullWidth
        /><br /><br />
           <FormControl fullWidth margin="normal" required>
          <InputLabel id="niveau-label">Niveau scolaire</InputLabel>
          <Select
            labelId="niveau-label"
          
            label="Niveau scolaire"
             inputRef={niveauRef}
            
          >
            <MenuItem value="primaire">Primaire</MenuItem>
            <MenuItem value="collège">Collège</MenuItem>
            <MenuItem value="lycée">Lycée</MenuItem>
            <MenuItem value="université">Université</MenuItem>
            <MenuItem value="autre">Autre</MenuItem>
          </Select>
        </FormControl><br /><br />
        <Button variant="contained" type="submit">S'inscrire</Button>
      </form>
    </Box>
    )
}