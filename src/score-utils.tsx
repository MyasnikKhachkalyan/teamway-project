import { createContext, FC, useContext, useState } from 'react';

type ScoreContextModel = [(num: number) => void, number];

export const ScoreContext = createContext<ScoreContextModel>([() => {}, 0]);

export const useUpdateScore = () => {
  const [updateScoreBy] = useContext(ScoreContext);

  return updateScoreBy;
}

export const useScore = () => {
  const [_, score] = useContext(ScoreContext);

  return score;
}

export const ScoreProvider: FC = ({ children }) => {
  const [score, updateScore] = useState(0);

  const handleQuestionAnswer = (updateBy: number) => {
    updateScore((score) => score + updateBy);
  };

  return (
    <ScoreContext.Provider value={[handleQuestionAnswer, score]}>
      {children}
    </ScoreContext.Provider>
  )
}
