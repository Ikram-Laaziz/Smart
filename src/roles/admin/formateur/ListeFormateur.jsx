
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate, useOutletContext } from 'react-router-dom';

export default function ListeFormateur(){

  const { formateur: formateurs, onDelete, onEdit } = useOutletContext();
  const navigate=useNavigate();
  const handleEdit=(formation)=>{
     onEdit(formation)
     navigate('/admin/formateur')
  }
    return(
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell align="right">Prenom</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Mot De Passe</TableCell>
            <TableCell align="right">Spécialité</TableCell>
            <TableCell align="right">Modifier</TableCell>
            <TableCell align="right">Supprimer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {formateurs.map((formateur) => (
            <TableRow
              key={formateur.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {formateur.nom}
              </TableCell>
              <TableCell align="right">{formateur.prenom}</TableCell>
              <TableCell align="right">{formateur.email}</TableCell>
              <TableCell align="right">{formateur.motDePasse}</TableCell>
              <TableCell align="right">{formateur.specialite}</TableCell>
              <TableCell align="right"> <Button variant="contained" color="success" onClick={()=>handleEdit(formateur)}>
        Modifier
      </Button></TableCell>
               <TableCell align="right"><Button variant="outlined" color="error" onClick={()=>onDelete(formateur.id)}>Supprimer</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>  
    )
}