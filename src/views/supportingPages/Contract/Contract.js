import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from 'common/Container';
import { Button } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
//import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import './Contract.css';

// const useStyles = makeStyles({
//   root: {
//     fontSize: '20px',
//     width: '100%',
//     fontFamily: 'Arial, sans-serif',
//   },
// });

const Contract = () => {
  const theme = useTheme();
  //const classes = useStyles();
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleNext = () => {
    navigate('/page-about', { state: { text: text } });
  };

  return (
    <>
      <Box>
        <Container>
          <Box boxShadow={4} borderRadius={2}>
            <Box bgcolor={theme.palette.primary.main} borderRadius={2}>
              <Container
                paddingX={{ xs: 2, sm: 4 }}
                style={{ display: 'flex' }}
              >
                <div>
                  <Typography
                    variant={'h3'}
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.common.white,
                    }}
                  >
                    Contract Analysis
                  </Typography>
                  <Typography
                    gutterBottom
                    sx={{
                      color: theme.palette.common.white,
                    }}
                  >
                    <strong>
                      Analyze loan agreements, mortgages, purchase agreements,
                      terms & services, and more...
                    </strong>
                  </Typography>
                </div>
              </Container>
              <Box
                component={'svg'}
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 1920 100.1"
                width={'100%'}
                marginBottom={-1}
              >
                <path
                  fill={theme.palette.background.paper}
                  d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
                ></path>
              </Box>
            </Box>
            <Container
              paddingTop={'0 !important'}
              paddingX={{ xs: 2, sm: 4 }}
              position={'relative'}
              top={0}
            >
              <Grid item xs={12} md={9}>
                <TextareaAutosize
                  style={{ borderColor: theme.palette.primary.main }}
                  className="field cursor"
                  placeholder="Copy and paste contract here..."
                  minRows="20"
                  onChange={(e) => handleTextChange(e)}
                />
              </Grid>
            </Container>
          </Box>
        </Container>
      </Box>
      <div
        style={{
          position: 'fixed',
          bottom: '0px',
          width: '100%',
          backgroundColor: theme.palette.primary.main,
          height: '70px',
          display: 'flex',
          padding: '10px',
          verticalAlign: 'center',
        }}
      >
        <Button
          href="/"
          variant="outlined"
          style={{
            size: '100%',
            color: 'white',
            borderColor: 'white',
            fontSize: '20px',
            borderRadius: '4px',
            height: '100%',
          }}
        >
          Back
        </Button>
        <div style={{ width: '100%' }}></div>
        <Button
          onClick={handleNext}
          variant="outlined"
          style={{
            height: '100%',
            backgroundColor: 'white',
            fontSize: '20px',
            borderRadius: '4px',
            verticalAlign: 'middle',
          }}
        >
          Analyze
        </Button>
      </div>
    </>
  );
};

export default Contract;
