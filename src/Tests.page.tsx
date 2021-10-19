import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import PatchStyles from 'patch-styles';
import axios from 'axios';
import { Button, Fade, Paper, Typography } from '@mui/material';
import { useUpdateScore } from './score-utils';
import { Link } from 'react-router-dom';

interface TestQuestionAnswer {
  text: string;
  score: number;
}

interface TestQuestion {
  question: string;
  answers: TestQuestionAnswer[];
}

const useStyles = makeStyles(() => ({
  TestsPageContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#70a7ff',
  },
  QuestionsBox: {
    display: 'flex',
    flexDirection: 'column',
    padding: '24px',
    maxWidth: '1000px',
    maxHeight: '700px',
    backgroundColor: 'whitesmoke',
    boxShadow: '-7px 5px 35px 7px rgba(166, 196, 255,0.61)',
    borderRadius: '5px',
  },
  AnswersContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginTop: '16px',
  },
  AnswerBox: {
    textAlign: 'start',
  },
}));

const TestsPage = () => {
  const classes = useStyles();
  const updateScoreBy = useUpdateScore();
  const [testQuestions, setTestQuestions] = useState<TestQuestion[]>([]);
  const [qIndex, setQIndex] = useState(0);

  useEffect(() => {
    axios.get<TestQuestion[]>('/api/test-questions').then((resp) => setTestQuestions(resp.data));
  }, []);

  const handleAnswer = (score: number) => {
    setQIndex((i) => i + 1);
    updateScoreBy(score);
  };

  return (
    <PatchStyles classNames={classes}>
      <div className="TestsPageContainer">
        {
          testQuestions.map((question, index) => (
            index === qIndex && (
              <Fade key={index} timeout={1000} in>
                <div className="QuestionsBox">
                  <Typography variant="h6">{question.question}</Typography>
                  <div className="AnswersContainer">
                    {
                      question.answers.map((answer, index) => (
                        <Button
                          key={index}
                          variant="outlined"
                          className="AnswerBox"
                          onClick={() => handleAnswer(answer.score)}
                        >
                          <Typography>{answer.text}</Typography>
                        </Button>
                      ))
                    }
                  </div>
                </div>
              </Fade>
            )
          ))
        }
        {
          !!qIndex && qIndex === testQuestions.length && (
            <Paper elevation={6}>
              <Button
                onClick={() =>  setQIndex(0)}
                size="large"
                variant="outlined"
                component={Link}
                to='/results'
              >
                See the results
              </Button>
            </Paper>
          )
        }
      </div>
    </PatchStyles>
  );
};

export default TestsPage;
