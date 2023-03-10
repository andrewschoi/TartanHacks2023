import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import Typography from '@mui/material/Typography';

const Footer = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        width={'100%'}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
        </Box>
      </Box>
    </Grid>
    {/* <Grid item xs={12}>
      <Typography
        align={'center'}
        variant={'subtitle2'}
        color="textSecondary"
        gutterBottom
      >
        &copy; ContractShield. 2023
      </Typography>
    </Grid> */}
  </Grid>
);

export default Footer;
