import React, { useState, useEffect } from 'react';
import { Box, Grid, Button, Typography } from '@mui/material';

type Project = {
  name: string;
  members: string[];
};

type UserDashboardProps = {};

const UserDashboard: React.FC<UserDashboardProps> = () => {

const projects:[] = []
  return (
    <Box sx={{ padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Welcome User, 
      </Typography>

      <Button variant="outlined" color="secondary"  sx={{ position: 'absolute', top: '1rem', right: '1rem' }}>
        Logout
      </Button>

      <Grid container spacing={4} sx={{ maxWidth: '900px', margin: '0 auto' }}>
        

        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            ➤ My Projects
          </Typography>
          {projects.length === 0 ? (
            <Typography>No projects assigned to you</Typography>
          ) : (
            projects.map((project, index) => (
              <Box key={index} sx={{ padding: '1rem', marginBottom: '1rem', border: '1px solid #ccc' }}>
                <Typography variant="body1" gutterBottom>
                  ▸ {project}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  - Members: {}
                </Typography>
              </Box>
            ))
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserDashboard;