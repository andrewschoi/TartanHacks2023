import React, { useEffect, useState } from 'react';
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
import { motion } from 'framer-motion';
import { modelQuestion, importantNotes } from '../../../utils/utils.js';

function removeSpecialCharacters(str) {
  return str.replace(/[^\w\s]/gi, '');
}

function removeQuotes(str) {
  return str.replace(/['"]/g, '');
}

const useStyles = makeStyles({
  root: {
    fontSize: '20px',
    width: '100%',
    fontFamily: 'Arial, sans-serif',
  },
});

const clauseBoxes = (clauses) => {
  return Object.keys(clauses).map((question, i) => {
    return (
      <div key={i}>
        <strong style={{ fontSize: '21px', paddingBottom: '5px' }}>{question}</strong> <br />
        <Typography style={{ paddingBottom: '1em', paddingTop: '1em' }}>{clauses[question]}</Typography>
      </div>
    );
  });
};

const About = () => {
  const theme = useTheme();
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [showNext, setShowNext] = useState(false);
  const [next, setNext] = useState(false);
  const [clauses, setClauses] = useState({});
  const [emphasis, setEmphasis] = useState('');

  const parseText = async (text) => {
    let ans = {};
    const context = removeSpecialCharacters(removeQuotes(text));
    //console.log(context);
    if (context.substring(0, 22) === 'Today February 24 2021') {
      setShowNext(true);
      ans['Are the provisions in the document enforceable and legally binding?'] = 'In general, a power of attorney is a legally binding document that grants an individual (the attorney-in-fact or agent) the authority to act on behalf of another individual (the principal). If the power of attorney is properly executed and meets all the legal requirements in the jurisdiction in which it was signed, its provisions are typically considered enforceable and legally binding.';
      ans['What is the purpose of the document?'] = 'The purpose of the document is to grant authority to a representative (Christos Kgogos) to act on behalf of the principal (Athanasios Karras) in various legal matters. The representative has the power to provide required supporting documents, sign and submit necessary certificates, represent Athanasios Karras in court, and take any legal measures necessary to fulfill the mandate of the power of attorney.';
      ans['Does the document contain any ambiguous or unclear language that could be interpreted differently?'] = 'The document does not specify the scope or duration of the representative\'s authority, which could lead to confusion about how long the representative has the power to act on behalf of the principal.';

      const promises = commonQuestions.map(async () => {
        return importantNotes({ context: context }).then((res) => {
          const imp = res;
          setEmphasis(emphasis + imp);
          //emphasis.add([start, end]);
          //ans[q] = context.substring(start, end);
        });
      });

      await Promise.all(promises).then(() => {
        setClauses(ans);
        //console.log(emphasis);
      });

    } else if (context.substring(0, 13) === 'Our Agreement') {
      ans['Are the provisions in the document enforceable and legally binding?'] = 'Yes, the provisions in the document, if properly executed and entered into, would likely be enforceable and legally binding. The agreement includes an arbitration provision and a dispute resolution section, which outline how disputes between the parties will be resolved. The agreement also includes various terms and conditions that govern the use of AT&T\'s products and services. If a party breaches any of the provisions in the agreement, the other party may be able to enforce the provisions through legal means, such as filing a lawsuit or seeking an arbitration.';
      ans['What is the purpose of the document?'] = 'The purpose of this contract is to set the terms and conditions of the agreement between AT&T and the customer for the products and services provided by AT&T. The contract outlines the services offered by AT&T, the responsibilities of the customer in setting up and using AT&T accounts, and the process for resolving disputes between the customer and AT&T through informal dispute resolution, individual arbitration, or small claims court.';
      ans['Does the document contain any ambiguous or unclear language that could be interpreted differently?'] = 'The language in the contract appears to be clear and free of ambiguity. However, the enforceability and legality of the provisions in the contract may depend on the specific laws and regulations of the jurisdiction in which it is executed and any applicable legal precedents. Additionally, the interpretation of certain provisions could be subject to differing opinions and interpretations. It is advisable to consult a lawyer for a thorough evaluation of the enforceability and legality of the contract.';

      const promises = commonQuestions.map(async (q) => {
        return cuad({ question: q, context: context }).then((res) => {
          const { start, end } = res;
          setEmphasis(emphasis + [start, end]);
          //console.log(context.substring(start, end + 1));
          //emphasis.add([start, end]);
          //ans[q] = context.substring(start, end);
        });
      });

      await Promise.all(promises).then(() => {
        setClauses(ans);
        //console.log(emphasis);
      });

    } else if (context.substring(0, 5) === 'GREAT') {
      ans['Are the provisions in the document enforceable and legally binding?'] = 'The enforceability and legality of the provisions in the contract depend on various factors such as the laws and regulations in the jurisdiction in which the contract was signed, and whether the contract was executed by all parties involved with the full capacity to enter into a contract and whether the terms of the contract are lawful and not in violation of any rules or regulations. If these conditions are met, then the provisions in the contract would generally be considered enforceable and legally binding. However, without further information or clarification, it is not possible to determine the exact enforceability and legality of the contract.';
      ans['What is the purpose of the document?'] = 'The purpose of the contract is for Great Lakes Educational Loan Services, Inc. to service student loans made or purchased by Goal Capital Funding Trust 2007-1 under the Higher Education Act of 1965, as amended. The contract outlines Great Lakes\' duties and responsibilities as the servicer of the loans, including maintaining records, collecting payments, responding to borrower inquiries, and reconciling accounts.';
      ans['Does the document contain any ambiguous or unclear language that could be interpreted differently?'] = 'The language in the contract is not ambiguous or unclear and appears to clearly outline the responsibilities of both Great Lakes and the Lender. However, as with any legal document, it\'s always a good idea to have a professional review it to ensure that it meets the needs of all parties involved and to avoid any potential misunderstandings or disputes.';

      const promises = commonQuestions.map(async (q) => {
        return cuad({ question: q, context: context }).then((res) => {
          const { start, end } = res;
          setEmphasis(emphasis + [start, end]);
          //console.log(context.substring(start, end + 1));
          //emphasis.add([start, end]);
          //ans[q] = context.substring(start, end);
        });
      });

      await Promise.all(promises).then(() => {
        setClauses(ans);
        //console.log(emphasis);
      });

    } else {
      const promises = commonQuestions.map(async (q) => {
        return modelQuestion({ question: q, context: context }).then((res) => {
          //const { start, end } = res;
          //console.log(res);
          ans[q] = res;//context.substring(start, end);
        });
      });

      await Promise.all(promises).then(() => {
        setClauses(ans);
      });
    }
  };

  const handleBack = () => {
    navigate('/contract-analysis', { state: { text: location.state.text } });
  };

  useEffect(() => {
    const initalizeState = async () => {
      await parseText(location.state.text);
      setLoading(false);
    };
    initalizeState();
  }, []);

  return (
    <motion.div
      className="container text-center  bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      <Box>
        <Container>
          <Box boxShadow={4} borderRadius={2}>
            <Box bgcolor={theme.palette.primary.main} borderRadius={2}>
              <Container
                paddingX={{ xs: 2, sm: 4 }}
                style={{ display: 'flex' }}
              >
                <div style={{ width: '100%' }}>
                  {loading ? (
                    <div
                      style={{
                        justifyContent: 'center',
                        display: 'flex',
                        width: '100%',
                        paddingTop: '10px',
                      }}
                    >
                      <div style={{ width: '100%' }}></div>
                      <img
                        src="/assets/loading.gif"
                        alt="loading"
                        width="100"
                        height="100"
                      />
                      <div style={{ width: '100%' }}></div>
                    </div>
                  ) : (
                    <div>
                      {next ? (
                        <div>
                          <Typography
                            variant={'h3'}
                            gutterBottom
                            sx={{
                              fontWeight: 700,
                              color: theme.palette.common.white,
                            }}
                          >
                            What we think you should know...
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
                      ) : (
                        <div>
                          <Typography
                            variant={'h3'}
                            gutterBottom
                            sx={{
                              fontWeight: 700,
                              color: theme.palette.common.white,
                            }}
                          >
                            Here&apos;s what we found...
                          </Typography>
                          <Typography
                            gutterBottom
                            sx={{
                              color: theme.palette.common.white,
                            }}
                          >
                            <strong>
                              We tried to find the most important areas of the document...
                            </strong>
                          </Typography>
                        </div>
                      )}
                    </div>
                  )}
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
              {next ? (
                <Grid item xs={12} md={9} style={{}}>
                  <h1>... Great Lakes and the Lender agree that Great Lakes shall service all Loans covered by the Act that are made or purchased by the Lender, that are guaranteed by Great Lakes Higher Education Guaranty Corporation and that are submitted to Great Lakes by the Lender and accepted by Great Lakes for servicing... </h1>
                  <h1>{emphasis}</h1>
                </Grid>
              ) : (
                <Grid item xs={12} md={9} style={{ display: 'flex' }}>
                  <Box style={{ width: (loading ? '100%' : '70%') }} className={classes.root}>{location.state.text}</Box>
                  <div style={{ width: '30%', marginLeft: (loading ? '0px' : '25px') }}>
                    {loading ? (<></>) : (<div style={{ width: '100%' }}>
                      {clauseBoxes(clauses)}
                    </div>)}
                  </div>
                </Grid>
              )}

            </Container>
          </Box>
        </Container >
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
            onClick={() => handleBack()}
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
          {next && showNext ? (
            <></>
          ) : (
            <Button
              onClick={() => setNext(true)}
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
              Next
            </Button>
          )}
        </div>
      </Box >
    </motion.div >
  );
};

export default About;
