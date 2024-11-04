import React from "react";
import { Question, ConcreteQuestionProps } from "../Question/Question";
import styles from "./OverwhelmedQuestion.module.css";

export const OverwhelmedQuestion = ({ disabled }: ConcreteQuestionProps) => {
  return (
    <Question question="How often have you felt overwhelmed in the past month?">
      <div className={styles.overwhelmed}>
        <label>
          <input
            required
            type="radio"
            name="survey[overwhelmed]"
            value="never"
            disabled={disabled}
          />
          Never
        </label>
        <label>
          <input
            type="radio"
            name="survey[overwhelmed]"
            value="rarely"
            disabled={disabled}
          />
          Rarely
        </label>
        <label>
          <input
            type="radio"
            name="survey[overwhelmed]"
            value="sometimes"
            disabled={disabled}
          />
          Sometimes
        </label>
        <label>
          <input
            type="radio"
            name="survey[overwhelmed]"
            value="often"
            disabled={disabled}
          />
          Often
        </label>
        <label>
          <input
            type="radio"
            name="survey[overwhelmed]"
            value="always"
            disabled={disabled}
          />
          Always
        </label>
      </div>
    </Question>
  );
};
