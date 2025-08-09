import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ListeMessage({ messages, deleteMessage }){
  return(
      <Box>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Liste des Messages
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="table des messages">
          <TableHead>
            <TableRow>
              <TableCell><strong>Nom Complet</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Message</strong></TableCell>
              <TableCell align="right">Supprimer</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {messages.length > 0 ? (
              messages.map((message) => (
                <TableRow key={message.id} hover>
                  <TableCell>{message.name}</TableCell>
                  <TableCell>{message.email}</TableCell>
                  <TableCell>{message.message} </TableCell>
                
                 
                  <TableCell align="right">
                    <IconButton color="error" onClick={()=>deleteMessage(message.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  Aucun message pour le moment.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}