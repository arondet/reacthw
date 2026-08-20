import { useDispatch, useSelector } from 'react-redux';
import { submitAnswers } from './features/questionnaire/questionnaireSlice';
import Question from './components/Question';
import Result from './components/Result';
import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionnaire.questions);
  const answers = useSelector((state) => state.questionnaire.answers);

  const allAnswered = questions.every(
    (q) => answers[q.id] !== undefined
  );

  const handleSubmit = () => {
    dispatch(submitAnswers());
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Анкета</h1>

      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}

      <button
        className={styles.submitButton}
        onClick={handleSubmit}
        disabled={!allAnswered}
      >
        Отправить ответы
      </button>

      <Result />
    </div>
  );
}

export default App;