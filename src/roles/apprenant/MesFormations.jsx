import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Button,
} from "@mui/material";
import ListeFormationData from "../../Data/Formation";



const APPRENANT_ID = "apprenant123";

export default function MesFormations() {
  const [inscriptions, setInscriptions] = useState([]);

  useEffect(() => {
    const inscrits = JSON.parse(localStorage.getItem("inscriptions")) || {};
    setInscriptions(inscrits[APPRENANT_ID] || []);
  }, []);

  
  const handleSupprimer = (formationId) => {
    const inscrits = JSON.parse(localStorage.getItem("inscriptions")) || {};
    let listeApprenant = inscrits[APPRENANT_ID] || [];

  
    listeApprenant = listeApprenant.filter((id) => id !== formationId);

   
    inscrits[APPRENANT_ID] = listeApprenant;
    localStorage.setItem("inscriptions", JSON.stringify(inscrits));

   
    setInscriptions(listeApprenant);
  };

  const formationsInscrites = ListeFormationData.filter((f) =>
    inscriptions.includes(f.id)
  );

  return (
    <Container maxWidth="sm">
      <Box mt={5} p={4} boxShadow={3} borderRadius={2}>
        <Typography variant="h5" gutterBottom align="center">
          Vos formations choisies
        </Typography>

        {formationsInscrites.length === 0 ? (
          <Typography align="center" color="text.secondary">
            Vous n'êtes inscrit à aucune formation.
          </Typography>
        ) : (
          <Paper>
            <List>
              {formationsInscrites.map((formation) => (
                <ListItem
                  key={formation.id}
                  secondaryAction={
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleSupprimer(formation.id)}
                    >
                      Supprimer
                    </Button>
                  }
                >
                  <ListItemText primary={formation.titre} />
                </ListItem>
              ))}
            </List>
          </Paper>
        )}
      </Box>
    </Container>
  );
}
