import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

export default function Dashboard() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Tableau de bord Admin
      </Typography>

      <Grid container spacing={3}>
     
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h6">Formations</Typography>
            <Typography variant="h3" color="primary">
              24
            </Typography>
          </Paper>
        </Grid>
         <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h6">Formateurs</Typography>
            <Typography variant="h3" color="primary">
              7
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
      