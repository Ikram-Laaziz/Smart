import { 
  TableContainer, Table, TableCell, TableRow, TableHead, TableBody, 
  Button, Paper, Typography, Box 
} from "@mui/material";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import PersonOffIcon from "@mui/icons-material/PersonOff";

export default function ListeInscription({ demandes, modifierStatut }) {
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#1976d2" }}>
        📋 Liste des inscriptions
      </Typography>

      <TableContainer component={Paper} elevation={4} sx={{ borderRadius: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label="table des inscriptions">
          <TableHead sx={{ backgroundColor: "#1976d2" }}>
            <TableRow>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Nom</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }} align="right">Prénom</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }} align="right">Email</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }} align="right">Âge</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }} align="right">Niveau Scolaire</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }} align="right">Statut</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }} align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {demandes.map((demande) => (
              <TableRow
                key={demande.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:hover": { backgroundColor: "#f5f5f5" }
                }}
              >
                <TableCell component="th" scope="row">{demande.nom}</TableCell>
                <TableCell align="right">{demande.prenom}</TableCell>
                <TableCell align="right">{demande.email}</TableCell>
                <TableCell align="right">{demande.age}</TableCell>
                <TableCell align="right">{demande.niveau}</TableCell>
                <TableCell 
                  align="right" 
                  sx={{ 
                    fontWeight: "bold", 
                    color: demande.statut === "acceptée" ? "green" : 
                           demande.statut === "refusée" ? "red" : "orange"
                  }}
                >
                  {demande.statut}
                </TableCell>
                <TableCell align="right">
                  {demande.statut === "en attente" && (
                    <>
                      <Button 
                        variant="contained" 
                        color="success" 
                        startIcon={<HowToRegIcon />} 
                        onClick={() => modifierStatut(demande.id, "acceptée")}
                        sx={{ mr: 1 }}
                      >
                        Accepter
                      </Button>
                      <Button 
                        variant="outlined" 
                        color="error" 
                        startIcon={<PersonOffIcon />} 
                        onClick={() => modifierStatut(demande.id, "refusée")}
                      >
                        Refuser
                      </Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
