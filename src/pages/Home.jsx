import { Link } from 'react-router-dom';
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';
import herosmart from '../assets/hero-smart.png';
import devImage from '../assets/dev.png';
import marketingDigital from '../assets/marketing.png';
import langueEtranger from '../assets/langue.png';

export default function Home() {
  return (
    <>
      {/* SECTION HÉRO */}
      <Box sx={{ bgcolor: '#1976d2', color: '#fff', py: 8, px: 4 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Formez-vous avec SMART<br />et boostez votre avenir
            </Typography><br/><br/>
            <Typography variant="body1" whiteSpace='pre-line'  fontSize='20px' gutterBottom>
              Rejoignez SMART, votre plateforme de formations en développement digital,{"\n"} 
              marketing, et langues étrangères et plus encore...
            </Typography><br/><br/>
            <Button
              variant="contained"
              color="warning"
              component={Link}
              to="/formations"
              sx={{ mt: 2 }}
            >
              Voir les Formations
            </Button>
          </Grid>
         <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
 <img
  src={herosmart}
  alt="Éducation SMART"
  style={{
    width: '100%',  
    maxWidth: '600px',
    borderRadius: '8px',
    display: 'block',
    marginLeft: '50px',  // espace fixe à gauche
  }}
/>

</Grid>

        </Grid>
      </Box>

      {/* SECTION CATALOGUE */}
      <Box sx={{ py: 6, px: 4 }}>
  <Typography variant="h4" fontWeight="bold" gutterBottom>
    Des formations pour tous les profils
  </Typography>

  <Typography 
    variant="body1"
    gutterBottom
    sx={{ fontSize: '18px', whiteSpace: 'pre-line' }}
  >
    SMART vous accompagne dans votre apprentissage avec des parcours adaptés,
    des formateurs qualifiés{"\n"}
    et un contenu pédagogique moderne.{"\n"}
    Apprenez à votre rythme, selon vos besoins.
  </Typography>


        {/* CARDS DE FORMATIONS POPULAIRES */}
        <Grid container spacing={4} mt={2}>
          {[
            {
              title: "Développement Web",
              desc: "HTML, CSS, JavaScript, React, Laravel...",
              image: devImage,
            },
            {
              title: "Marketing Digital",
              desc: "SEO, Réseaux sociaux, Google Ads...",
              image: marketingDigital
            },
            {
              title: "Langues Étrangères",
              desc: "Anglais, Français, Communication professionnelle...",
              image: langueEtranger
            }
          ].map((formation, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="220"
                  image={formation.image}
                  alt={formation.title}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {formation.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {formation.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}