import { Box, Typography, Grid, Card, CardContent,} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';


export default function DashboardFormateur() {
    
    const stats = {
        participantsTotal: 12,
        formationsEnCours: 3,
        contenusCrees: 8,
        tauxReussite: 85
    };

    const formationsRecentes = [
        { id: 1, titre: "Développement Web", participants: 5, statut: "En cours" },
        { id: 2, titre: "Développement Mobile", participants: 4, statut: "En cours" },
        { id: 3, titre: "Bureautique", participants: 3, statut: "Terminé" }
    ];

    const getStatutColor = (statut) => {
        switch (statut) {
            case "En cours":
                return "primary";
            case "Terminé":
                return "success";
            default:
                return "default";
        }
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
                Dashboard Formateur
            </Typography>

           
            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ bgcolor: '#e3f2fd' }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <PeopleIcon sx={{ fontSize: 40, color: '#1976d2', mr: 2 }} />
                                <Box>
                                    <Typography variant="h4" component="div">
                                        {stats.participantsTotal}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Participants
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ bgcolor: '#f3e5f5' }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <SchoolIcon sx={{ fontSize: 40, color: '#7b1fa2', mr: 2 }} />
                                <Box>
                                    <Typography variant="h4" component="div">
                                        {stats.formationsEnCours}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Formations en cours
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                

               
            </Grid>

          
        </Box>
    );
} 