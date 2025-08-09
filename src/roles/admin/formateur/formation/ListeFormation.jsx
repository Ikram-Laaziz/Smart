
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate, useOutletContext } from 'react-router-dom';
export default function ListeFormation(){
  const { formation: formations, onDelete, onEdite } = useOutletContext();
  const navigate = useNavigate();
  
  const handleEdit = (formation) => {
    onEdite(formation);
    navigate("/admin/formation/ajouter");
  }
    return(
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Titre</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Durée</TableCell>
            <TableCell align="right">Date Début</TableCell>
            <TableCell align="right">Date Fin</TableCell>
            <TableCell align="right">Modifier</TableCell>
            <TableCell align="right">Supprimer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {formations.map((formation) => (
            <TableRow
              key={formation.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {formation.titre}
              </TableCell>
              <TableCell align="right">{formation.description}</TableCell>
              <TableCell align="right">{formation.duree}</TableCell>
              <TableCell align="right">{formation.date_debut}</TableCell>
              <TableCell align="right">{formation.date_fin}</TableCell>
              <TableCell align="right"> <Button variant="contained" color="success" onClick={()=>handleEdit(formation)}>
        Modifier
      </Button></TableCell>
               <TableCell align="right"><Button variant="outlined" color="error" onClick={()=>onDelete(formation.id)}>Supprimer</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      
      </Table>
    </TableContainer>
    )
}