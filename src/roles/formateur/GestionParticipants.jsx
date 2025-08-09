import { useState } from "react";
import { Box, AppBar, Toolbar, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,  Chip } from "@mui/material";
import { Link } from "react-router-dom";

export default function GestionParticipants() {
    const [participants, setParticipants] = useState([
        {
            id: 1,
            nom: "Doumbia",
            prenom: "Khalid",
            email: "khalid.doumbia@email.com",
            formation: "Développement Web",
            statut: "Inscrit",
            dateInscription: "2025-01-15"
        },
        {
            id: 2,
            nom: "El Amrani",
            prenom: "Fatima",
            email: "fatima.elamrani@email.com",
            formation: "Développement Mobile",
            statut: "En cours",
            dateInscription: "2025-01-10"
        }
    ]);

    const getStatutColor = (statut) => {
        switch (statut) {
            case "Inscrit":
                return "primary";
            case "En cours":
                return "success";
            case "Terminé":
                return "default";
            default:
                return "default";
        }
    };

    

    return (
        <Box>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div" sx={{ mr: 3 }}>
                        <Link to="liste" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Liste des participants
                        </Link>
                    </Typography>
                   
                </Toolbar>
            </AppBar>

            <Box sx={{ p: 3 }}>
                <Typography variant="h4" gutterBottom>
                    Gestion des Participants
                </Typography>

                <TableContainer component={Paper} sx={{ mt: 3 }}>
                    <Table sx={{ minWidth: 650 }} aria-label="table des participants">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nom</TableCell>
                                <TableCell>Prénom</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Formation</TableCell>
                                <TableCell>Statut</TableCell>
                                <TableCell>Date d'inscription</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {participants.map((participant) => (
                                <TableRow key={participant.id}>
                                    <TableCell>{participant.nom}</TableCell>
                                    <TableCell>{participant.prenom}</TableCell>
                                    <TableCell>{participant.email}</TableCell>
                                    <TableCell>{participant.formation}</TableCell>
                                    <TableCell>
                                        <Chip 
                                            label={participant.statut} 
                                            color={getStatutColor(participant.statut)}
                                            size="small"
                                        />
                                    </TableCell>
                                    <TableCell>{participant.dateInscription}</TableCell>
                                    
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
} 