import { Box, Typography, Link, Grid } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: '#000',
        color: '#fff',
        py: 4,
        px: { xs: 2, md: 6 },
        mt: 8,
      }}
    >
      <Grid container spacing={30}>
     
        <Grid item xs={12} md={4} sx={{ pr: 4 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            À propos
          </Typography>
          <Typography variant="body2"  sx={{  whiteSpace: 'pre-line' }}>
            SMART est une plateforme de formations{"\n"} professionnelles en développement web,{"\n"}
            marketing digital, et langues étrangères.{"\n"} Apprenez à votre rythme avec des{"\n"}
            formateurs qualifiés.
          </Typography>
        </Grid>

        <Grid  item xs={12} md={4} sx={{ px: 4 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Liens utiles
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link href="/" underline="hover" color="inherit">
              Accueil
            </Link>
            <Link href="/formations" underline="hover" color="inherit">
              Formations
            </Link>
            <Link href="/contact" underline="hover" color="inherit">
              Contact
            </Link>
            <Link href="/register" underline="hover" color="inherit">
              Inscription
            </Link>
          </Box>
        </Grid>

        {/* CONTACT */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body2">Email : contact@smart.ma</Typography>
          <Typography variant="body2">Téléphone : +212 6 12 34 56 78</Typography>
          <Typography variant="body2">Adresse : Meknès, Maroc</Typography>
        </Grid>
      </Grid>

      <Typography variant="body2" align="center" sx={{ mt: 4 }}>
        © {new Date().getFullYear()} SMART Formation. Tous droits réservés.
      </Typography>
    </Box>
  );
}
