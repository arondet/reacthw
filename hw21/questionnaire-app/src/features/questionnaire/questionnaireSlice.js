import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    {
      id: 1,
      text: 'Какой цвет получается при смешивании синего и жёлтого?',
      options: [
        { label: 'Зелёный', points: 2 },
        { label: 'Красный', points: 0 },
      ],
    },
    {
      id: 2,
      text: 'Сколько дней в неделе?',
      options: [
        { label: '67', points: 0 },
        { label: '7', points: 2 },
      ],
    },
    {
      id: 3,
      text: 'Какое животное говорит «мяу»?',
      options: [
        { label: 'Утка', points: 0 },
        { label: 'Кошка', points: 2 },
      ],
    },
  ],
  answers: {},
  result: null,
};

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { questionId, points } = action.payload;
      state.answers[questionId] = points;
    },
    submitAnswers: (state) => {
      const totalPoints = Object.values(state.answers).reduce(
        (sum, points) => sum + points,
        0
      );
      state.result = totalPoints;
    },
  },
});

export const { answerQuestion, submitAnswers } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;