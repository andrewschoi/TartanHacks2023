/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { pages } from 'layouts/navigation';

const DemoPages = () => {
  const theme = useTheme();

  return (
    <Box>

      <Box>
        {pages.map((p, i) => (
          <Box
            key={p.id}
            marginBottom={i === pages.length - 1 ? 0 : { xs: 4, sm: 6, md: 8 }}
          >
            <Typography
              variant={'h5'}
              sx={{
                marginBottom: { xs: 2, sm: 3, md: 4 },
                fontWeight: 700,
              }}
            >
              {p.title}
            </Typography>
            <Box
              component={Grid}
              container
              borderRight={`1px solid ${theme.palette.divider}`}
              borderBottom={`1px solid ${theme.palette.divider}`}
            >
              {p.pages.map((sp) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={sp.title}
                  component={Link}
                  underline={'none'}
                  color={'unset'}
                  href={sp.href}
                >
                  <Box
                    width={'100%'}
                    height={'100%'}
                    borderLeft={`1px solid ${theme.palette.divider}`}
                    borderTop={`1px solid ${theme.palette.divider}`}
                    padding={{ xs: 2, md: 4 }}
                  >
                    <Typography
                      variant={'subtitle1'}
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                      }}
                    >
                      {sp.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {sp.title} page
                    </Typography>
                    <Box marginTop={1} align={'right'}>
                      <Typography color={'primary'} variant={'subtitle2'}>
                        View demo
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DemoPages;
