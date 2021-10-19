import { createContext } from 'react';

type ScoreContextModel = [(num: number) => void, number];

export const ScoreContext = createContext<ScoreContextModel>([() => {}, 0]);
