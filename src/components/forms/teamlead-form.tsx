'use client';

import { Box, Button, Typography, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { Grid } from '@mui/material';
import { useForm} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';

interface FormData {
  projectName: string;
  userId: string;
}

const schema = yup
    .object({
       projectName: yup.string().required("Team Name is required"),
       userId : yup.string().required("This field is required")
    })
    .required()


export default function TeamLeadForm (){

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    })

    const currentUser = JSON.parse(sessionStorage.getItem('currentUser') || '{}');
    const users = useSelector((state:RootState)=> state.user.users);
    const eligibleUsers = users.filter((user)=> user.role!== 'admin' && !user.isTeamLead);

      const onSubmit = (data: FormData) => {
        console.log("TeamLead Form Data: ",data);
        
        reset();
      };
    return(
    <>
      <Box sx={{ padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Typography variant="h6" sx={{marginBottom:'1rem'}}>
            Welcome Team Lead,{currentUser.name} 
        </Typography>

      <Grid container spacing={4} sx={{ maxWidth: '900px', margin: '0 auto' }}>

        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
              ➤ Create Project
            </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
             {...register('projectName')}
              fullWidth
              label="Project Name"
              variant="outlined"
              sx={{ marginBottom: '1rem' }}
              helperText={errors.projectName?.message}
            />

            <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
              <InputLabel>Team Members</InputLabel>
              <Select
                multiple
                label="Team Members"
                {...register('userId')}
              >
                {eligibleUsers.map((user) => (
                  <MenuItem key={user.id} value={user.id}>
                    {user.name}
                  </MenuItem>
                ))} 
              </Select>
            </FormControl>
            <Button variant="contained" color="primary" >
              Create Project
            </Button>
          </form>
        </Grid>

        {/* <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            ➤ My Projects
          </Typography>
          {project.projects.length === 0 ? (
            <Typography>No projects created yet</Typography>
          ) : (
            project.projects.map((project, index) => (
              <Box key={index} sx={{ padding: '1rem', marginBottom: '1rem', border: '1px solid #ccc' }}>
                <Typography variant="body1" gutterBottom>
                  ▸ {project.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  - Members: {project.members.join(', ')}
                </Typography>
                <Button variant="outlined" color="primary" sx={{ marginRight: '1rem' }}>
                  Edit Project
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                >
                  Delete Project
                </Button>
              </Box>
            ))
          )}
        </Grid> */}

      </Grid>
    </Box>
    </>
    
);
}
