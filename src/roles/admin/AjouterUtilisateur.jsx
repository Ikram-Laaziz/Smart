import { useRef, useState } from "react";
import { 
  TextField, 
  Button, 
  Box, 
  Typography, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem,
  Alert
} from '@mui/material';

export default function AjouterUtilisateur() {
  const nomRef = useRef();
  const prenomRef = useRef();
  const emailRef = useRef();
  const motDePasseRef = useRef();
  const ageRef = useRef();
  const [role, setRole] = useState('');
  const [specialite, setSpecialite] = useState('');
  const [niveau, setNiveau] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const formations = [
    "Développement Web",
    "Développement Mobile", 
    "Bureautique",
    "Design et multimédia",
    "Marketing digital",
    "Langues étrangères"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    const nom = nomRef.current.value.trim();
    const prenom = prenomRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const motDePasse = motDePasseRef.current.value.trim();
    const age = ageRef.current ? ageRef.current.value.trim() : '';

    if (!nom || !prenom || !email || !motDePasse || !role) {
      setError("Veuillez remplir tous les champs obligatoires");
      return;
    }

    if (role === 'apprenant' && (!age || !niveau)) {
      setError("Pour un apprenant, l'âge et le niveau sont obligatoires");
      return;
    }

    if (role === 'formateur' && !specialite) {
      setError("Pour un formateur, la spécialité est obligatoire");
      return;
    }

    // Vérifier si l'email existe déjà
    const existingUsers = JSON.parse(localStorage.getItem("apprenants") || "[]");
    const existingFormateurs = JSON.parse(localStorage.getItem("formateurs") || "[]");
    const allUsers = [...existingUsers, ...existingFormateurs];
    
    const emailExiste = allUsers.some(user => user.email === email);
    if (emailExiste) {
      setError("Un utilisateur avec cet email existe déjà");
      return;
    }

    if (role === 'apprenant') {
      // Créer un apprenant
      const nouvelApprenant = {
        id: Date.now(),
        nom: `${nom} ${prenom}`,
        email,
        age,
        niveau,
        dateInscription: new Date().toISOString().split('T')[0],
        statut: "actif"
      };

      const updatedApprenants = [...existingUsers, nouvelApprenant];
      localStorage.setItem("apprenants", JSON.stringify(updatedApprenants));
      
      console.log("Apprenant ajouté:", nouvelApprenant);
    } else if (role === 'formateur') {
      // Créer un formateur
      const nouveauFormateur = {
        id: Date.now(),
        nom,
        prenom,
        email,
        motDePasse,
        specialite
      };

      const updatedFormateurs = [...existingFormateurs, nouveauFormateur];
      localStorage.setItem("formateurs", JSON.stringify(updatedFormateurs));
      
      console.log("Formateur ajouté:", nouveauFormateur);
    }

    // Réinitialiser le formulaire
    nomRef.current.value = "";
    prenomRef.current.value = "";
    emailRef.current.value = "";
    motDePasseRef.current.value = "";
    if (ageRef.current) {
      ageRef.current.value = "";
    }
    setRole('');
    setSpecialite('');
    setNiveau('');

    setSuccess(true);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
    setSpecialite('');
    setNiveau('');
    setError('');
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom color='#1976d2'>
        Créer un compte utilisateur
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Utilisateur créé avec succès !
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <TextField
          required
          id="nom"
          label="Nom"
          inputRef={nomRef}
          fullWidth
          sx={{ mb: 2 }}
        />
        
        <TextField
          required
          id="prenom"
          label="Prénom"
          inputRef={prenomRef}
          fullWidth
          sx={{ mb: 2 }}
        />
        
        <TextField
          type='email'
          required
          id="email"
          label="Email"
          inputRef={emailRef}
          fullWidth
          sx={{ mb: 2 }}
        />
        
        <TextField
          type='password'
          required
          id="motDePasse"
          label="Mot de passe"
          inputRef={motDePasseRef}
          fullWidth
          sx={{ mb: 2 }}
        />

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="role-label">Rôle *</InputLabel>
          <Select
            labelId="role-label"
            id="role"
            value={role}
            label="Rôle *"
            onChange={handleRoleChange}
            required
          >
            <MenuItem value="apprenant">Apprenant</MenuItem>
            <MenuItem value="formateur">Formateur</MenuItem>
          </Select>
        </FormControl>

        {role === 'apprenant' && (
          <>
            <TextField
              required
              id="age"
              label="Âge"
              type="number"
              inputRef={ageRef}
              fullWidth
              sx={{ mb: 2 }}
            />
            
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel id="niveau-label">Niveau scolaire *</InputLabel>
              <Select
                labelId="niveau-label"
                id="niveau"
                value={niveau}
                label="Niveau scolaire *"
                onChange={(e) => setNiveau(e.target.value)}
                required
              >
                <MenuItem value="primaire">Primaire</MenuItem>
                <MenuItem value="collège">Collège</MenuItem>
                <MenuItem value="lycée">Lycée</MenuItem>
                <MenuItem value="université">Université</MenuItem>
                <MenuItem value="autre">Autre</MenuItem>
              </Select>
            </FormControl>
          </>
        )}

        {role === 'formateur' && (
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="specialite-label">Spécialité *</InputLabel>
            <Select
              labelId="specialite-label"
              id="specialite"
              value={specialite}
              label="Spécialité *"
              onChange={(e) => setSpecialite(e.target.value)}
              required
            >
              {formations.map((formation) => (
                <MenuItem key={formation} value={formation}>
                  {formation}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

        <Button variant="contained" type="submit" fullWidth>
          Créer le compte
        </Button>
      </form>
    </Box>
  );
}
