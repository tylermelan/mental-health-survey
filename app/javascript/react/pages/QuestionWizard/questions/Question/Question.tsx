import React, { ReactNode } from "react";
import styles from "./Question.module.css";

export interface ConcreteQuestionProps {
  disabled: boolean;
}

interface QuestionProps {
  question: string;
  children: ReactNode;
}

export const Question = ({ question, children }: QuestionProps) => {
  return (
    <>
      <p className={styles.question}>{question}</p>
      {children}
    </>
  );
};
