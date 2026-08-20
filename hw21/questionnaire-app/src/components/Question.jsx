import { useDispatch, useSelector } from 'react-redux';
import { answerQuestion } from '../features/questionnaire/questionnaireSlice';
import styles from './Question.module.css';

function Question({ question }) {
  const dispatch = useDispatch();
  const selectedPoints = useSelector(
    (state) => state.questionnaire.answers[question.id]
  );

  const handleAnswer = (points) => {
    dispatch(answerQuestion({ questionId: question.id, points }));
  };

  return (
    <div className={styles.question}>
      <p className={styles.text}>{question.text}</p>
      <div className={styles.options}>
        {question.options.map((option) => (
          <button
            key={option.label}
            className={
              selectedPoints === option.points
                ? styles.optionSelected
                : styles.option
            }
            onClick={() => handleAnswer(option.points)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;