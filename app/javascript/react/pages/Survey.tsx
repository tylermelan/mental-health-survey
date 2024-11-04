import React, { useState } from "react";
import { QuestionWizard } from "./QuestionWizard/QuestionWizard";
import styles from "./Survey.module.css";

enum SurveyState {
  InProgress,
  Completed,
  Error,
}

export const Survey = () => {
  const [surveyState, setSurveyState] = useState(SurveyState.InProgress);

  const onSuccess = () => {
    setSurveyState(SurveyState.Completed);
  };

  const onError = () => {
    setSurveyState(SurveyState.Error);
  };

  const Content = () => {
    switch (surveyState) {
      case SurveyState.InProgress:
        return <QuestionWizard onSuccess={onSuccess} onError={onError} />;
      case SurveyState.Completed:
        return <div>DONE</div>;
      case SurveyState.Error:
        return <div>ERROR</div>;
    }
  };

  return (
    <>
      <header className={styles.header}></header>
      <main className={styles.content}>
        <Content />
      </main>
    </>
  );
};
