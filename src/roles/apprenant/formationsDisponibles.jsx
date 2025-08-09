import { useState, useEffect } from "react";
import { Box, Button,Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper,} from "@mui/material";

import ListeFormationData from "../../Data/Formation";



const APPRENANT_ID = "apprenant123";

export default function FormationsDisponibles() {
  const [inscriptions, setInscriptions] = useState([]);

  useEffect(() => {
    const inscrits = JSON.parse(localStorage.getItem("inscriptions")) || {};
    setInscriptions(inscrits[APPRENANT_ID] || []);
  }, []);

  const toggleInscription = (formationId, inscrire) => {
    const inscrits = JSON.parse(localStorage.getItem("inscriptions")) || {};
    let listeApprenant = inscrits[APPRENANT_ID] || [];

    if (inscrire) {
      if (listeApprenant.includes(formationId)) {
        alert("Vous êtes déjà inscrit à cette formation.");
        return;
      }
      if (listeApprenant.length >= 3) {
        alert("Vous ne pouvez vous inscrire qu'à 3 formations maximum.");
        return;
      }
      listeApprenant = [...listeApprenant, formationId];
    } else {
      listeApprenant = listeApprenant.filter((id) => id !== formationId);
    }

    inscrits[APPRENANT_ID] = listeApprenant;
    localStorage.setItem("inscriptions", JSON.stringify(inscrits));
    setInscriptions(listeApprenant);
  };



  return (
    <Container maxWidth="lg">
      <Box mt={5} mb={3}>
        <Typography variant="h4" align="center" gutterBottom>
          Liste des Formations Disponibles
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" gutterBottom>
          Vous pouvez vous inscrire jusqu'à 3 formations.
        </Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Titre</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Durée (jours)</TableCell>
              <TableCell>Date début</TableCell>
              <TableCell>Date fin</TableCell>
              <TableCell align="center">S'inscrire</TableCell>
              <TableCell align="center">Se désinscrire</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {ListeFormationData.map((formation) => {
              const estInscrit = inscriptions.includes(formation.id);
              return (
                <TableRow key={formation.id}>
                  <TableCell>{formation.titre}</TableCell>
                  <TableCell>{formation.description}</TableCell>
                  <TableCell>{formation.duree}</TableCell>
                  <TableCell>{(formation.date_debut)}</TableCell>
                  <TableCell>{(formation.date_fin)}</TableCell>

                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={estInscrit || inscriptions.length >= 3}
                      onClick={() => toggleInscription(formation.id, true)}
                    >
                      Oui
                    </Button>
                  </TableCell>

                  <TableCell align="center">
                    <Button
                      variant="outlined"
                      color="secondary"
                      disabled={!estInscrit}
                      onClick={() => toggleInscription(formation.id, false)}
                    >
                      Non
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
