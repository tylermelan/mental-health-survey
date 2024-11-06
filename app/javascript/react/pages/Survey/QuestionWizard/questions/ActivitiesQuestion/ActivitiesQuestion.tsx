import { Question, ConcreteQuestionProps } from "../Question/Question";
import styles from "./ActivitiesQuestion.module.css";

export const ActivitiesQuestion = ({ disabled }: ConcreteQuestionProps) => {
  return (
    <Question question="What activities or practices help you feel more grounded or relaxed?">
      <textarea
        className={styles.activities}
        required
        name="survey[activities]"
        disabled={disabled}
        data-testid="activities-question-textarea"
      />
    </Question>
  );
};
