import React, { useState, useRef } from "react";
import {
  OverwhelmedQuestion,
  SupportedQuestion,
  ActivitiesQuestion,
} from "./questions";
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
  const nextStep = async () => {
    const valid = formRef.current?.reportValidity();
    if (!valid) return;

    if (!isLastQuestion) {
      setStep(step + 1);
    } else {
      const fromData = new FormData(formRef.current!);

      const param = document.querySelector<HTMLMetaElement>(
        "meta[name='csrf-param']"
      )?.content;
      const value = document.querySelector<HTMLMetaElement>(
        "meta[name='csrf-token']"
      )?.content;

      fromData.append(param!, value!);

      const response = await fetch("/", {
        method: "POST",
        body: fromData,
      });

      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    }
  };

  return (
    <form className={styles.wizard} ref={formRef} data-turbo="false">
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
          className={`${styles.button} ${styles.primary}`}
          type="button"
          onClick={nextStep}
        >
          {isLastQuestion ? "Submit" : "Continue"}
        </button>
      </div>
    </form>
  );
};
