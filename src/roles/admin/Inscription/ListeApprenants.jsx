import { 
  TableContainer, Table, TableCell, TableRow, TableHead, TableBody, 
  Paper, Typography, Box, Chip 
} from "@mui/material";
import { useState, useEffect } from "react";
import ApprenantData from "../../../Data/ApprenantData";

export default function ListeApprenants() {
  const [apprenants, setApprenants] = useState([]);

  useEffect(() => {
    // Récupérer les apprenants depuis localStorage
    const savedApprenants = JSON.parse(localStorage.getItem("apprenants") || "[]");
    
    // Combiner les données initiales avec les nouveaux apprenants
    const allApprenants = [...ApprenantData, ...savedApprenants];
    
    // Supprimer les doublons basés sur l'email
    const uniqueApprenants = allApprenants.filter((apprenant, index, self) =>
      index === self.findIndex(a => a.email === apprenant.email)
    );
    
    setApprenants(uniqueApprenants);
  }, []);

  const getStatutColor = (statut) => {
    switch (statut) {
      case "actif":
        return "success";
      case "inactif":
        return "error";
      default:
        return "default";
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#1976d2" }}>
        👥 Liste des Apprenants
      </Typography>

      <TableContainer component={Paper} elevation={4} sx={{ borderRadius: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label="table des apprenants">
          <TableHead sx={{ backgroundColor: "#1976d2" }}>
            <TableRow>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Nom</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }} align="right">Email</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }} align="right">Âge</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }} align="right">Niveau</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }} align="right">Date d'inscription</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }} align="right">Statut</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {apprenants.map((apprenant) => (
              <TableRow
                key={apprenant.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:hover": { backgroundColor: "#f5f5f5" }
                }}
              >
                <TableCell component="th" scope="row">{apprenant.nom}</TableCell>
                <TableCell align="right">{apprenant.email}</TableCell>
                <TableCell align="right">{apprenant.age || "N/A"}</TableCell>
                <TableCell align="right">{apprenant.niveau || "N/A"}</TableCell>
                <TableCell align="right">{apprenant.dateInscription || "N/A"}</TableCell>
                <TableCell align="right">
                  <Chip 
                    label={apprenant.statut || "actif"} 
                    color={getStatutColor(apprenant.statut || "actif")}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
} 