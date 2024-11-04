import React from "react";
import { Question, ConcreteQuestionProps } from "../Question/Question";
import styles from "./OverwhelmedQuestion.module.css";

export const OverwhelmedQuestion = ({ disabled }: ConcreteQuestionProps) => {
  const answers = ["never", "rarely", "sometimes", "often", "always"];

  return (
    <Question question="How often have you felt overwhelmed in the past month?">
      <div className={styles.overwhelmed}>
        {answers.map((answer, index) => (
          <label key={index}>
            <input
              required
              type="radio"
              name="survey[overwhelmed]"
              value={answer}
              disabled={disabled}
            />
            {answer}
          </label>
        ))}
      </div>
    </Question>
  );
};
