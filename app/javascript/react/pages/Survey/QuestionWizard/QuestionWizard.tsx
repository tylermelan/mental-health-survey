import { useState, useRef } from "react";
import {
  OverwhelmedQuestion,
  SupportedQuestion,
  ActivitiesQuestion,
} from "./questions";
import { postSurvey } from "./postSurvey/postSurvey";
import styles from "./QuestionWizard.module.css";

interface QuestionWizardProps {
  onSuccess: () => void;
  onError: () => void;
}

export const QuestionWizard = ({ onSuccess, onError }: QuestionWizardProps) => {
  const [step, setStep] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);

  const questions = [
    OverwhelmedQuestion,
    SupportedQuestion,
    ActivitiesQuestion,
  ];

  const isLastQuestion = step == questions.length - 1;

  const goBack = () => setStep(step - 1);

  const submit = async () => {
    const fromData = new FormData(formRef.current ?? undefined);
    const response = await postSurvey(fromData);

    if (response?.ok) {
      onSuccess();
    } else {
      onError();
    }
  };

  const nextStep = () => {
    const valid = formRef.current?.reportValidity();
    if (!valid) return;

    if (!isLastQuestion) {
      setStep(step + 1);
    } else {
      submit();
    }
  };

  return (
    <form className={styles.wizard} ref={formRef}>
      {questions.map((Question, index) => (
        <div hidden={step !== index} key={index}>
          <Question disabled={step < index} />
        </div>
      ))}
      <div className={styles.buttons}>
        {step > 0 && (
          <button className={styles.button} type="button" onClick={goBack}>
            Back
          </button>
        )}
        <button
          className={`${styles.button} ${styles.buttonPrimary}`}
          type="button"
          onClick={nextStep}
        >
          {isLastQuestion ? "Submit" : "Continue"}
        </button>
      </div>
    </form>
  );
};
