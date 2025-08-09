   import { AppBar,Toolbar ,Box,Button} from "@mui/material";
   import { NavLink } from "react-router-dom";
   export default function Header() {
  return (
    <AppBar position="static" sx={{ bgcolor: '#1976d2' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
      

        <Box>
          {[
            { label: 'Accueil', to: '/' },
            { label: 'Formations', to: '/formations' },
            { label: 'Contact', to: '/contact' },
            { label: 'Inscription', to: '/inscription' },
            { label: 'Connexion', to: '/connexion' }
          ].map((item, index) => (
            <Button
              key={index}
              component={NavLink}
              to={item.to}
              sx={{ color: '#fff', mx: 1 }}
              style={({ isActive }) => ({
                fontWeight: isActive ? 'bold' : 'normal',
                borderBottom: isActive ? '2px solid white' : 'none',
                borderRadius: 0
              })}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

