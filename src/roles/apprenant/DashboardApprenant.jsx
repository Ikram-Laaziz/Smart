import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

export default function DashboardApprenant() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard Apprenant
      </Typography>

      <Grid container spacing={3}>
     
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h6">Formations Disponibles</Typography>
            <Typography variant="h3" color="primary">
              6
            </Typography>
          </Paper>
        </Grid>
         <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h6">Mes Formations</Typography>
            <Typography variant="h3" color="primary">
              2
            </Typography>
          </Paper>
        </Grid>
        
      </Grid>
    </Box>
  );
}
      