import React from 'react';
import { CssBaseline, Grid } from '@mui/material';

import Sidebar from '../Sidebar/Sidebar';
import ChatDashboard from '../Chat/ChatDashboard';


export default function Dashboard() {
   return (
      <div>
        <Grid container component="main">
          <CssBaseline />
          <Grid item xs={12} sm={4} md={3}>
            <Sidebar />
          </Grid>

          <Grid item xs={false} sm={8} md={9}>
            <ChatDashboard />
          </Grid>
        </Grid>
      </div>
    )
  
}