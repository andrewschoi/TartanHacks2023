/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
//import RocketIllustration from 'svg/illustrations/Rocket';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={'center'} xs={12} md={6} style={{ marginTop: '50px' }}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2} >
            <Typography
              variant="h2"
              color="textPrimary"
              sx={{
                fontWeight: 700,
              }}
            >
              Contract
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
              >
                Shield
              </Typography>
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography
              variant="h6"
              component="p"
              color="textSecondary"
              sx={{ fontWeight: 400 }}
            >
              Transform the way you understand your agreements today.
              {/* Analyze legal documents, contracts, and agreements at <br />
              <strong>zero cost</strong> */}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          >
            <Button
              component={'a'}
              variant="contained"
              color="primary"
              size="large"
              style={{ fontSize: '18px' }}
              fullWidth={isMd ? false : true}
              onClick={() => navigate('/contract-analysis')}
            >
              Contract Analysis
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          height={'100%'}
          width={'100%'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box height={'100%'} width={'100%'} maxHeight={600} style={{ paddingTop: '10px' }}>
            <img src="/assets/landing-image.png" alt="contract shield" width="50%" style={{ float: 'right' }} />
            {/* <RocketIllustration width={'100%'} height={'100%'} /> */}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
