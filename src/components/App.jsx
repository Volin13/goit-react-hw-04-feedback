import React, { useReducer } from 'react';
import { Container, Section, FeedbackOptions, Statistics } from './index';
const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0,
};
const options = ['good', 'neutral', 'bad'];

function reducer(state, action) {
  const good = action.type === 'good' ? state.good + 1 : state.good;
  const total = state.total + 1;
  const positivePercentage = Number(((good / total) * 100).toFixed(0));
  switch (action.type) {
    case 'good':
      return { ...state, good, total, positivePercentage };
    case 'neutral':
      return {
        ...state,
        neutral: state.neutral + 1,
        total,
        positivePercentage,
      };
    case 'bad':
      return { ...state, bad: state.bad + 1, total, positivePercentage };
    default:
      return;
  }
}

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleBtnClick = ({ target: { name } }) => {
    dispatch({ type: name });
  };
  const { good, neutral, bad, total, positivePercentage } = state;
  console.log(state.good);

  return (
    <Container>
      <Section title="Please leave your feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleBtnClick} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    </Container>
  );
};
export default App;
