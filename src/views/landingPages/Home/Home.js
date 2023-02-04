import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import { Features, Footer, Hero } from './components';

const Home = () => {
  const theme = useTheme();
  return (
    <>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'} style={{ marginTop: '-65px' }}>
        <Container position="relative" zIndex={2}>
          <Hero />
        </Container>
      </Box>
      <Container style={{ marginTop: '25px' }}>
        <Features />
      </Container>

      {/* <Container>
        <Highlights />
      </Container> */}

      <Container>
        <Footer />
      </Container>
    </>
  );
};

export default Home;
