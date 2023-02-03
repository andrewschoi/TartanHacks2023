import React, { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from 'common/Container';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import cuad, { commonQuestions } from '../../../utils/utils.js';

function removeSpecialCharacters(str) {
  return str.replace(/[^\w\s]/gi, '');
}

function removeQuotes(str) {
  return str.replace(/['"]/g, '');
}

async function parseText(text) {
  let ans = {};
  const context = removeSpecialCharacters(removeQuotes(text));
  const promises = commonQuestions.map(async (q) => {
    return cuad({ question: q, context: context }).then((res) => {
      const { start, end } = res;
      ans[q] = [start, end];
      return ans;
    });
  });

  await Promise.all(promises).then(() => {
    console.log(ans);
  });
}
const useStyles = makeStyles({
  root: {
    fontSize: '20px',
    width: '100%',
    fontFamily: 'Arial, sans-serif',
  },
});

const About = () => {
  const theme = useTheme();
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    parseText(location.state.text);
  }, []);

  return (
    <Box>
      <Container>
        <Box boxShadow={4} borderRadius={2}>
          <Box bgcolor={theme.palette.primary.main} borderRadius={2}>
            <Container paddingX={{ xs: 2, sm: 4 }} style={{ display: 'flex' }}>
              <div>
                <Typography
                  variant={'h3'}
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    color: theme.palette.common.white,
                  }}
                >
                  Heres what we found...
                </Typography>
                <Typography
                  gutterBottom
                  sx={{
                    color: theme.palette.common.white,
                  }}
                >
                  <strong>
                    We looked for important legal clauses, deadlines, and
                    more...
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
              <Box className={classes.root}>{location.state.text}</Box>
            </Grid>
          </Container>
        </Box>
      </Container>
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
          onClick={() => navigate('/contract-analysis')}
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
      </div>
    </Box>
  );
};

export default About;
