import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ListeFormationData from '../Data/Formation';

export default function Formations() {
  return (<Box>
   <Box sx={{ backgroundColor: '#1976d2', color: '#fff', textAlign: 'center', py: 6 }}>
  <Typography variant="h3" fontWeight="bold" gutterBottom>
    Nos Formations
  </Typography>
  <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto' }}>
    Découvrez nos formations conçues pour vous aider à acquérir de nouvelles compétences et évoluer dans votre carrière. Que vous soyez débutant ou expérimenté, nos modules s’adaptent à vos besoins.
  </Typography>
</Box><br/><br/><br/>


      <Grid 
        container 
        spacing={4} 
        justifyContent="center"  // centre la grille horizontalement
      >
        {ListeFormationData.map((formation) => (
          <Grid 
            item 
            key={formation.id} 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              width: { xs: '100%', md: 320 } // fixe largeur identique en md+, plein largeur en xs
            }}
          >
            <Card 
              sx={{ 
                height: 300,          // hauteur fixe
                width: 320,           // largeur fixe
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                 boxShadow: '0 0 8px 2px rgba(255, 165, 0, 0.3)',  // shadow orange léger
    transition: 'box-shadow 0.3s ease',
    '&:hover': {
      boxShadow: '0 0 12px 4px rgba(255, 165, 0, 0.6)', // shadow orange plus visible au hover
    }
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {formation.titre}
                </Typography>
                <Typography variant="body2" gutterBottom noWrap>
                  {formation.description}
                </Typography>
                <Typography variant="body2" noWrap>
                  <strong>Durée :</strong> {formation.duree} heures
                </Typography>
                <Typography variant="body2" noWrap>
                  <strong>Début :</strong> {formation.date_debut}
                </Typography>
                <Typography variant="body2" noWrap>
                  <strong>Fin :</strong> {formation.date_fin}
                </Typography>
              </CardContent>
              <Box sx={{ p: 2 }}>
                <Button
                  variant="contained"
                  fullWidth
                  component={Link}
                  to={`/formations/${formation.id}`}
                >
                  Détails
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
