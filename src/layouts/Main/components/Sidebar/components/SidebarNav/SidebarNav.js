import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
//import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const SidebarNav = ({ pages, onClose }) => {
  const theme = useTheme();
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  return (
    <Box>
      <Box
        //display={'flex'}
        style={{ paddingTop: '10px' }}
        justifyContent={'flex-end'}
        onClick={() => onClose()}
      >
        <IconButton>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box paddingX={2} paddingBottom={2}>
        <Box>
          {pages.map((item, i) => (
            <Box key={i} marginBottom={4}>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 700,
                  marginTop: '10px',
                  textTransform: 'uppercase',
                  fontSize: '26px',
                  marginBottom: 1,
                  display: 'block',
                }}
              >
                {item.title}
              </Typography>
              {/* <Grid container spacing={1}> */}

              {item.pages.map((p, i) => (
                // <Grid item xs={6} key={i}>
                <li key={i} style={{ display: 'flex' }}>
                  <Link
                    variant="body2"
                    component={'a'}
                    href={p.href}
                    color={activeLink === p.href ? 'primary' : 'textPrimary'}
                    underline={'none'}
                    sx={{
                      width: '100%',
                      paddingBottom: '6px',
                      fontWeight: activeLink === p.href ? 600 : 400,
                      fontSize: '21px',
                      '&:hover': {
                        textDecoration: 'none',
                        color: theme.palette.primary.dark,
                      },
                    }}
                    onClick={() => onClose()}
                  >
                    {p.title}
                  </Link>
                </li>
                //</Grid>
              ))}

              {/* </Grid> */}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.array.isRequired,
  onClose: PropTypes.func,
};

export default SidebarNav;
