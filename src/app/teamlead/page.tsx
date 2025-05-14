import { Box, Typography } from '@mui/material';
import TeamLeadForm from '@/components/teamlead-form';
export default function TeamLead (){
    return(
    <>
    <Box sx={{ padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Welcome Team Lead
      </Typography>

      <TeamLeadForm/>

     
    </Box>
    </>
    
);
}
