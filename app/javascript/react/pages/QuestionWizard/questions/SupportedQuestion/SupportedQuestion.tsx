import React from "react";
import { Question, ConcreteQuestionProps } from "../Question/Question";
import styles from "./SupportedQuestion.module.css";

export const SupportedQuestion = ({ disabled }: ConcreteQuestionProps) => {
  const test = Array(10)
    .fill(undefined)
    .map((_, index) => (
      <option value={index + 1} label={`${index + 1}`} key={index}></option>
    ));

  return (
    <Question question="On a scale of 1 to 10, how supported do you feel by friends, family, or colleagues?">
      <input
        className={styles.supported}
        name="survey[supported]"
        type="range"
        min="1"
        max="10"
        step="1"
        defaultValue="5"
        list="values"
        disabled={disabled}
      />

      <datalist className={styles.supportedValues} id="values">
        {test}
      </datalist>
    </Question>
  );
};