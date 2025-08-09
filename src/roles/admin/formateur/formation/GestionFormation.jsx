import { useState } from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import ListeFormationData from "../../../../Data/Formation";
export default function GestionFormation(){
    const [formation,setFormation]=useState([]);
    const [formationModifier,setFormationModifier]=useState(null);
    useEffect(() => {
  const stored = localStorage.getItem("formations");
  if (stored) {
    setFormation(JSON.parse(stored));
  } else {
    setFormation(ListeFormationData);
  }
}, []);
const saveAndSetFormations = (newFormations) => {
  setFormation(newFormations);
  localStorage.setItem("formations", JSON.stringify(newFormations));
};


        const AjouterModifierFormation=(formationData)=>{
            const exist=formation.some((f)=>f.id===formationData.id);
            if(exist){
                const maj=formation.map((f)=>f.id===formationData.id?formationData:f);
                 saveAndSetFormations(maj)
            }else{
                saveAndSetFormations([...formation,formationData]);
            }
            setFormationModifier(null);
            
        }
         const supprimer=(idFormation)=>{
            const formationData=formation.filter((f)=>idFormation!==f.id)
           saveAndSetFormations(formationData)
           
        }
         const Modifier=(formation)=>{
            setFormationModifier(formation)
         }
    return (
        <Box>
          <AppBar position="static">
           <Toolbar variant="dense">
              <Typography variant="h6" color="inherit" component="div" sx={{ mr: 3 }}>
               <Link to="ajouter"  style={{ textDecoration: 'none', color: 'inherit' }}>
                 Ajouter une formation
               </Link>
              </Typography>
              <Typography variant="h6" color="inherit" component="div">
               <Link to="lister"  style={{ textDecoration: 'none', color: 'inherit' }}>
                Liste des formations
               </Link>
              </Typography>
          </Toolbar>
          </AppBar>  
          
         
          <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Gestion des Formations
            </Typography>
            
            <Outlet
              context={{
                formation,
                formationModifier,
                onAdd: AjouterModifierFormation,
                onDelete: supprimer,
                onEdite: Modifier,
              }}
            />
          </Box>
        </Box>
    )
}