import { Outlet } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function GestionFormateur() {
    const [formateur,setFormateur]=useState([]);
    const [formateurModifier,setFormateurModifier]=useState(null);
    const AjouterModifierFormateur=(formateurData)=>{
        const exist=formateur.some((f)=>f.id===formateurData.id)
      
     if(exist){
        const maj=formateur.map((f)=>f.id===formateurData.id?formateurData:f)
        setFormateur(maj)
     }else{
        setFormateur([...formateur,formateurData])
     }
     setFormateurModifier(null);
    }
      const supprimer=(id)=>{
        const formateurData=formateur.filter((f)=>f.id!==id)
        setFormateur(formateurData)
      }
      const modifier=(formateur)=>{
         setFormateurModifier(formateur)
      }
    return(
        <Box>
            <AppBar position="static">
           <Toolbar variant="dense">
              <Typography variant="h6" color="inherit" component="div" sx={{ mr: 3 }}>
               <Link to="ajouter"  style={{ textDecoration: 'none', color: 'inherit' }}>
                 Ajouter une formateur
               </Link>
              </Typography>
              <Typography variant="h6" color="inherit" component="div">
               <Link to="lister"  style={{ textDecoration: 'none', color: 'inherit' }}>
                Liste des formateur
               </Link>
              </Typography>
          </Toolbar>
          </AppBar> 
          <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                        Gestion des Formateur
            </Typography>
            <Outlet
             context={{
                formateur,
                formateurModifier,
                onAdd:AjouterModifierFormateur,
                onDelete:supprimer,
                onEdit:modifier,
             }}
            />
          </Box>  
        </Box>
    )
}