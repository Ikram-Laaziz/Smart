import {  Typography,  Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import DashboardIcon from '@mui/icons-material/Dashboard';
import React from 'react';

export default function FormateurLayouts() {
    const navItems = [
        { label: 'Dashboard', to: '/formateur', icon: <DashboardIcon /> },
        { label: 'Gérer les Participants', to: '/formateur/participants', icon: <PeopleIcon /> },
        { label: 'Gestion des Contenus', to: '/formateur/contenu', icon: <SchoolIcon /> }
    ];

    return (
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
                    Espace Formateur
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
                                '&:hover': { bgcolor: '#1b5e20' }
                            }}
                        >
                            <ListItemIcon>
                                {React.cloneElement(icon, { sx: { color: 'white' } })}
                            </ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItem>
                    ))}
                </List>
                
                <Box sx={{ mt: 'auto', pt: 2, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                        Connecté en tant que Formateur
                    </Typography>
                </Box>
            </Box>
            
          
            <Box component="main" sx={{ flexGrow: 1, bgcolor: '#f8f9fa', p: 3 }}>
                <Outlet />
            </Box>
        </Box>
    );
} 