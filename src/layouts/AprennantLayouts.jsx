import { Typography,Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SchoolIcon from '@mui/icons-material/School';
import React from 'react';


export default function ApprennantLayouts(){
    const navItems = [
        { label: 'Dashboard', to: '/apprenant', icon: <DashboardIcon /> },
        { label: 'Les formations Disponibles', to: '/apprenant/formationsDisponibles', icon: <LibraryBooksIcon /> },
        { label: 'Mes Formations', to: '/apprenant/mesFormations', icon: <SchoolIcon /> }
    ];
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
             Espace Apprenant
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


