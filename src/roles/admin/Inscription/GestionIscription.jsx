import ListeInscription from "./ListeInscription";
import ListeApprenants from "./ListeApprenants";
import { useState, useEffect } from "react";
import { Box, Tabs, Tab } from "@mui/material";

export default function GestionInscription(){
  const [demandes, setDemandes] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  
  // Charger les demandes depuis localStorage au démarrage
  useEffect(() => {
    const savedDemandes = localStorage.getItem("demandes");
    if (savedDemandes) {
      setDemandes(JSON.parse(savedDemandes));
    }
  }, []);

  const modifierStatut = (id, nouveauStatut) => {
    const updatedDemandes = demandes.map((demande) =>
      demande.id === id ? { ...demande, statut: nouveauStatut } : demande
    );
    setDemandes(updatedDemandes);
    localStorage.setItem("demandes", JSON.stringify(updatedDemandes));

    // Si la demande est acceptée, ajouter l'apprenant dans les données
    if (nouveauStatut === "acceptée") {
      const demandeAcceptee = demandes.find(demande => demande.id === id);
      if (demandeAcceptee) {
        ajouterApprenant(demandeAcceptee);
      }
    }
  };

  const ajouterApprenant = (demande) => {
    // Récupérer les apprenants existants depuis localStorage
    const existingApprenants = JSON.parse(localStorage.getItem("apprenants") || "[]");
    
    // Vérifier si l'apprenant existe déjà (basé sur l'email)
    const apprenantExiste = existingApprenants.some(app => app.email === demande.email);
    
    if (apprenantExiste) {
      console.log("Apprenant déjà existant:", demande.email);
      return;
    }
    
    // Créer le nouvel apprenant
    const nouvelApprenant = {
      id: Date.now(),
      nom: `${demande.nom} ${demande.prenom}`,
      email: demande.email,
      age: demande.age,
      niveau: demande.niveau,
      dateInscription: new Date().toISOString().split('T')[0],
      statut: "actif"
    };
    
    // Ajouter le nouvel apprenant
    const updatedApprenants = [...existingApprenants, nouvelApprenant];
    
    // Sauvegarder dans localStorage
    localStorage.setItem("apprenants", JSON.stringify(updatedApprenants));
    
    console.log("Apprenant ajouté:", nouvelApprenant);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
      <Tabs value={activeTab} onChange={handleTabChange} sx={{ mb: 3 }}>
        <Tab label="Demandes d'inscription" />
        <Tab label="Apprenants acceptés" />
      </Tabs>
      
      {activeTab === 0 && (
        <ListeInscription demandes={demandes} modifierStatut={modifierStatut} />
      )}
      
      {activeTab === 1 && (
        <ListeApprenants />
      )}
    </Box>
  );
}