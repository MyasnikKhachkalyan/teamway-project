import React from 'react';
import { makeStyles } from '@mui/styles';
import PatchStyles from 'patch-styles';
import { Button, Fade, Grow, Typography } from '@mui/material';
import LandingImg from './assets/home-page-img.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  HomeContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  LandingBox: {
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '5px',
    padding: '20px',
    maxWidth: '1000px',
    backgroundColor: '#a6c4ff',
    boxShadow: '-7px 5px 35px 7px rgba(166, 196, 255,0.61)',
  },
  GreetingMessageBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '40%',

    '& :first-child': {
      fontSize: '40px',
      fontWeight: 'bold',
    },

    '& :last-child': {
      fontSize: '32px',
    }
  },
  ImgContainer: {
    display: 'flex',

    '& img': {
      width: 500,
    }
  },
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
      <div className="HomeContainer">
        <Grow in timeout={1000}>
          <div>
            <Fade in timeout={1000}>
              <div className="LandingBox">
                <div className="GreetingMessageBox">
                  <Typography>Welcome</Typography>
                  <Typography>
                    Let`s take a few minutes to take a simple personality test to find out whether you are Introvert or Extrovert
                  </Typography>
                </div>
                <div className="ImgContainer">
                  <img src={LandingImg} alt='' />
                </div>
              </div>
            </Fade>
          </div>
        </Grow>
        <Button
          variant="contained"
          component={Link}
          to="/tests"
        >
          Go to test
        </Button>
      </div>
    </PatchStyles>
  );
};

export default HomePage;
