
import { useParams } from 'react-router-dom';
import ListeFormationData from '../Data/Formation';
import { Box, Typography, Paper, Divider } from '@mui/material';

export default function FormationDetail() {
  const { id } = useParams();
  const formation = ListeFormationData.find(f => f.id === parseInt(id));

  if (!formation) {
    return <Typography variant="h6" color="error">Formation non trouvée</Typography>;
  }

  return (
  

    <Box sx={{ maxWidth: 700, mx: "auto", p: 4 }}>
      
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {formation.titre}
        </Typography>

        <Typography variant="body1" paragraph>
          {formation.description}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="subtitle1"><strong>Durée :</strong> {formation.duree} heures</Typography>
        <Typography variant="subtitle1"><strong>Date de début :</strong> {formation.date_debut}</Typography>
        <Typography variant="subtitle1"><strong>Date de fin :</strong> {formation.date_fin}</Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="subtitle1"><strong>Public concerné :</strong></Typography>
        <Typography variant="body2" paragraph>{formation.public_concernes}</Typography>

        <Typography variant="subtitle1"><strong>Prérequis :</strong></Typography>
        <Typography variant="body2" paragraph>{formation.prerequis}</Typography>

        <Typography variant="subtitle1"><strong>Modalités :</strong></Typography>
        <Typography variant="body2" paragraph>{formation.modalite}</Typography>

        <Typography variant="subtitle1"><strong>Prix :</strong> {formation.prix}</Typography>
      </Paper>
    </Box>
  );
}
