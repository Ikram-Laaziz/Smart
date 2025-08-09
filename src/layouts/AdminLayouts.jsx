import { Typography,Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import React from 'react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PeopleIcon from '@mui/icons-material/People';

export default function AdminLayouts(){

    const navItems=[
        {label:'Dashboard' , to:'/admin', icon: <DashboardIcon />},
        {label:'Gestion des Formations', to:'/admin/formation', icon: <SchoolIcon />},
        {label:'Gestion des Formateurs' ,to:'/admin/formateur',icon:<PersonIcon/>},
        {label:'Gestion des Messages' ,to:'/admin/message',icon:<MessageIcon/>},
        {label:'Gestion des Inscription', to:'/admin/inscription',icon:<PersonAddIcon/>},
        {label:'Créer un Utilisateur', to:'/admin/ajouter-utilisateur',icon:<GroupAddIcon/>},
        {label:'Liste des Utilisateurs', to:'/admin/liste-utilisateurs',icon:<PeopleIcon/>}
    ]
    return(
         <Box sx={{ display: "flex", minHeight: "100vh" }}>
       
          <Box sx={{ 
            width: 280, 
            bgcolor: '#1976d2', 
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            p: 3
          }}>
            <Typography variant="h5" sx={{ mb: 4, fontWeight: 'bold', color: 'white' }}>
              Administration
            </Typography>
            
            <List sx={{ flexGrow: 1 }}>
              {navItems.map(({ label, to, icon }) => (
                <ListItem 
                  key={to}
                  component={Link} 
                  to={to} 
                  sx={{ 
                    color: 'white', 
                    textDecoration: 'none',
                    mb: 1,
                    borderRadius: 1,
                    '&:hover': { bgcolor: '#1565c0' }
                  }}
                >
                  <ListItemIcon>
                    {React.cloneElement(icon, { sx: { color: 'white' } })}
                  </ListItemIcon>
                  <ListItemText primary={label} />
                </ListItem>
              ))}
            </List>
            
          
          </Box>
          
         
          <Box component="main" sx={{ flexGrow: 1, bgcolor: '#f8f9fa', p: 3 }}>
            <Outlet />
          </Box>
        </Box>
    )
}