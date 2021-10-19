import React, { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import PatchStyles from 'patch-styles';
import { ScoreContext } from './score-utils';
import { Link } from 'react-router-dom';
import { Button, Grow, Typography, Zoom } from '@mui/material';

const useStyles = makeStyles(() => ({
  ResultsPageContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#8cb8ff',
  },
  ResultsBox: {
    display: 'flex',
    flexDirection: 'column',
    padding: '24px',
    backgroundColor: 'whitesmoke',
    boxShadow: '-7px 5px 35px 7px rgba(166, 196, 255,0.61)',
    borderRadius: '5px',
    gap: '12px',
  },
}));

const ResultsPage = () => {
  const classes = useStyles();
  const [changeScoreBy, score] = useContext(ScoreContext);

  return (
    <PatchStyles classNames={classes}>
      <div className="ResultsPageContainer">
        <Zoom in timeout={1000}>
          <div>
            <Grow in timeout={1000}>
              <div className="ResultsBox">
                <Typography>You are { score <= 5  ? 'Introvert' : 'Extrovert' }!!!</Typography>
                <Button
                  variant="contained"
                  component={Link}
                  to='/'
                  onClick={() => changeScoreBy(-score)}
                >
                  To Home Page
                </Button>
              </div>
            </Grow>
          </div>
        </Zoom>
      </div>
    </PatchStyles>
  );
};

export default ResultsPage;
