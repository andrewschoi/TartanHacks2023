import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import { Features, Footer, Hero, Highlights } from './components';

const Home = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Hero />
        </Container>
      </Box>
      <Container>
        <Features />
      </Container>

      <Container>
        <Highlights />
      </Container>

      <Container>
        <Footer />
      </Container>
    </Box>
  );
};

export default Home;
