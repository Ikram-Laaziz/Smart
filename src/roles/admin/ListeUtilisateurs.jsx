import { useState, useEffect } from "react";
import { 
  Box, 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Chip,
  Tabs,
  Tab,
  IconButton
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ListeUtilisateurs() {
  const [apprenants, setApprenants] = useState([]);
  const [formateurs, setFormateurs] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    // Charger les apprenants depuis localStorage
    const savedApprenants = JSON.parse(localStorage.getItem("apprenants") || "[]");
    setApprenants(savedApprenants);

    // Charger les formateurs depuis localStorage
    const savedFormateurs = JSON.parse(localStorage.getItem("formateurs") || "[]");
    setFormateurs(savedFormateurs);
  }, []);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const deleteApprenant = (id) => {
    const updatedApprenants = apprenants.filter(apprenant => apprenant.id !== id);
    setApprenants(updatedApprenants);
    localStorage.setItem("apprenants", JSON.stringify(updatedApprenants));
  };

  const deleteFormateur = (id) => {
    const updatedFormateurs = formateurs.filter(formateur => formateur.id !== id);
    setFormateurs(updatedFormateurs);
    localStorage.setItem("formateurs", JSON.stringify(updatedFormateurs));
  };

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
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#1976d2" }}>
        👥 Liste des Utilisateurs
      </Typography>

      <Tabs value={activeTab} onChange={handleTabChange} sx={{ mb: 3 }}>
        <Tab label={`Apprenants (${apprenants.length})`} />
        <Tab label={`Formateurs (${formateurs.length})`} />
      </Tabs>

      {activeTab === 0 && (
        <TableContainer component={Paper} elevation={4} sx={{ borderRadius: 2 }}>
          <Table sx={{ minWidth: 650 }} aria-label="table des apprenants">
            <TableHead sx={{ backgroundColor: "#1976d2" }}>
              <TableRow>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Nom</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Email</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Âge</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Niveau</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Date d'inscription</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Statut</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {apprenants.length > 0 ? (
                apprenants.map((apprenant) => (
                  <TableRow
                    key={apprenant.id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      "&:hover": { backgroundColor: "#f5f5f5" }
                    }}
                  >
                    <TableCell component="th" scope="row">{apprenant.nom}</TableCell>
                    <TableCell>{apprenant.email}</TableCell>
                    <TableCell>{apprenant.age || "N/A"}</TableCell>
                    <TableCell>{apprenant.niveau || "N/A"}</TableCell>
                    <TableCell>{apprenant.dateInscription || "N/A"}</TableCell>
                    <TableCell>
                      <Chip 
                        label={apprenant.statut || "actif"} 
                        color={getStatutColor(apprenant.statut || "actif")}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <IconButton 
                        color="error" 
                        onClick={() => deleteApprenant(apprenant.id)}
                        size="small"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    Aucun apprenant trouvé.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {activeTab === 1 && (
        <TableContainer component={Paper} elevation={4} sx={{ borderRadius: 2 }}>
          <Table sx={{ minWidth: 650 }} aria-label="table des formateurs">
            <TableHead sx={{ backgroundColor: "#1976d2" }}>
              <TableRow>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Nom</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Prénom</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Email</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Spécialité</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {formateurs.length > 0 ? (
                formateurs.map((formateur) => (
                  <TableRow
                    key={formateur.id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      "&:hover": { backgroundColor: "#f5f5f5" }
                    }}
                  >
                    <TableCell component="th" scope="row">{formateur.nom}</TableCell>
                    <TableCell>{formateur.prenom}</TableCell>
                    <TableCell>{formateur.email}</TableCell>
                    <TableCell>{formateur.specialite || "N/A"}</TableCell>
                    <TableCell>
                      <IconButton 
                        color="error" 
                        onClick={() => deleteFormateur(formateur.id)}
                        size="small"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    Aucun formateur trouvé.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}


