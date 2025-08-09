import { useState } from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

export default function GestionContenu() {
    const [contenu,setContenu]=useState([]);
        const [contenuModifier,setContenuModifier]=useState(null);
    
            const AjouterModifierContenu=(contenuData)=>{
                const exist=contenu.some((f)=>f.id===contenuData.id);
                if(exist){
                    const maj=contenu.map((f)=>f.id===contenuData.id?contenuData:f);
                     setContenu(maj)
                }else{
                    setContenu([...contenu,contenuData]);
                }
                setContenuModifier(null);
                
            }
             const supprimer=(idContenu)=>{
                const contenuData=contenu.filter((f)=>idContenu!==f.id)
               setContenu(contenuData)
               
            }
             const Modifier=(contenu)=>{
                setContenuModifier(contenu)
             }
    return (
        <Box>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div" sx={{ mr: 3 }}>
                        <Link to="ajouter" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Ajouter un contenu
                        </Link>
                    </Typography>
                    <Typography variant="h6" color="inherit" component="div">
                        <Link to="liste" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Liste des contenus
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>

            <Box sx={{ p: 3 }}>
                <Typography variant="h4" gutterBottom>
                    Gestion des Contenus Pédagogiques
                </Typography>
                
                
                 <Outlet
             context={{
                contenu,
                contenuModifier,
                onAdd:AjouterModifierContenu,
                onDelete:supprimer,
                onEdit:Modifier,
             }}
            /> 
            </Box>
        </Box>
    );
} 