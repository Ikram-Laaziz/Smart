
import { useNavigate } from "react-router-dom";
import { 
  Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, 
  Button, IconButton 
} from '@mui/material';
import { useOutletContext } from "react-router-dom";
import { Delete as DeleteIcon } from '@mui/icons-material';

export default function ListeContenus() {
 const { contenu: contenus, onDelete, onEdit } = useOutletContext();
  const navigate = useNavigate();
const handleEdit = (contenu) => {
  onEdit(contenu);
  navigate('../ajouter');
};

  
  
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Liste des Contenus Pédagogiques
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="table des contenus">
          <TableHead>
            <TableRow>
              <TableCell><strong>Titre</strong></TableCell>
              <TableCell><strong>Formation</strong></TableCell>
              <TableCell><strong>Durée</strong></TableCell>
              <TableCell><strong>Date de création</strong></TableCell>
              <TableCell align="right">Modifier</TableCell>
              <TableCell align="right">Supprimer</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contenus.length > 0 ? (
              contenus.map((contenu) => (
                <TableRow key={contenu.id} hover>
                  <TableCell>{contenu.titre}</TableCell>
                  <TableCell>{contenu.formation}</TableCell>
                  <TableCell>{contenu.duree} min</TableCell>
                  <TableCell>{contenu.dateCreation}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="outlined"
                     onClick={()=>handleEdit(contenu)}
                    >
                      Modifier
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton color="error" onClick={()=>onDelete(contenu.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  Aucun contenu créé pour le moment.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
