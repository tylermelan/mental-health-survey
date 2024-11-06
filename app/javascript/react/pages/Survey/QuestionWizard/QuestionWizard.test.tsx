import { render, screen, fireEvent } from "@testing-library/react";
import { QuestionWizard } from "./QuestionWizard";

const getOverwhelmedQuestionRadio = () => screen.getByDisplayValue("never");

const getSupportedQuestionRange = () =>
  screen.getByTestId("supported-question-range");

const getActivitiesQuestionTextarea = () =>
  screen.getByTestId<HTMLTextAreaElement>("activities-question-textarea");

const getContinueButton = () => screen.getByText("Continue");

const getSubmitButton = () => screen.getByText("Submit");

describe("first question", () => {
  beforeEach(() => {
    render(<QuestionWizard onSuccess={() => {}} onError={() => {}} />);
  });

  test("it displays OverwhelmedQuestion and hides the other questions", () => {
    expect(getOverwhelmedQuestionRadio()).toBeVisible();

    expect(getSupportedQuestionRange()).not.toBeVisible();

    expect(getActivitiesQuestionTextarea()).not.toBeVisible();
  });

  test("it disables the following questions", () => {
    expect(getOverwhelmedQuestionRadio()).not.toBeDisabled();

    expect(getSupportedQuestionRange()).toBeDisabled();

    expect(getActivitiesQuestionTextarea()).toBeDisabled();
  });
});

describe("second question", () => {
  beforeEach(() => {
    render(<QuestionWizard onSuccess={() => {}} onError={() => {}} />);

    fireEvent.click(getOverwhelmedQuestionRadio());
    fireEvent.click(getContinueButton());
  });

  test("it displays SupportedQuestion and hides the other questions", () => {
    expect(getOverwhelmedQuestionRadio()).not.toBeVisible();

    expect(getSupportedQuestionRange()).toBeVisible();

    expect(getActivitiesQuestionTextarea()).not.toBeVisible();
  });

  test("it disables the following questions", () => {
    expect(getOverwhelmedQuestionRadio()).not.toBeDisabled();

    expect(getSupportedQuestionRange()).not.toBeDisabled();

    expect(getActivitiesQuestionTextarea()).toBeDisabled();
  });
});

describe("third question", () => {
  beforeEach(() => {
    render(<QuestionWizard onSuccess={() => {}} onError={() => {}} />);

    fireEvent.click(getOverwhelmedQuestionRadio());
    fireEvent.click(getContinueButton());
    fireEvent.click(getContinueButton());
  });

  test("it displays ActivitiesQuestion and hides the other questions", () => {
    expect(getOverwhelmedQuestionRadio()).not.toBeVisible();

    expect(getSupportedQuestionRange()).not.toBeVisible();

    expect(getActivitiesQuestionTextarea()).toBeVisible();
  });

  test("no questions are disabled", () => {
    expect(getOverwhelmedQuestionRadio()).not.toBeDisabled();

    expect(getSupportedQuestionRange()).not.toBeDisabled();

    expect(getActivitiesQuestionTextarea()).not.toBeDisabled();
  });
});

let ok: boolean;

jest.mock("./postSurvey/postSurvey", () => ({
  postSurvey: () => Promise.resolve({ ok }),
}));

describe("submitting the form", () => {
  const onSuccess = jest.fn();
  const onError = jest.fn();

  beforeEach(() => {
    render(<QuestionWizard onSuccess={onSuccess} onError={onError} />);

    fireEvent.click(getOverwhelmedQuestionRadio());
    fireEvent.click(getContinueButton());
    fireEvent.click(getContinueButton());
    getActivitiesQuestionTextarea().textContent = "some text";
    fireEvent.click(getSubmitButton());
  });

  describe("response is ok", () => {
    beforeAll(() => {
      ok = true;
    });

    test("it calls onSuccess", () => {
      expect(onSuccess).toHaveBeenCalled();
    });
  });

  describe("response is not ok", () => {
    beforeAll(() => {
      ok = false;
    });

    test("it calls onError", () => {
      expect(onError).toHaveBeenCalled();
    });
  });
});
