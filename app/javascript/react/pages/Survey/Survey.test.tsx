import { act, render, screen } from "@testing-library/react";
import { Survey } from "./Survey";

interface QuestionWizardProxyProps {
  onSuccess: () => void;
  onError: () => void;
}

let onSuccess: QuestionWizardProxyProps["onSuccess"];
let onError: QuestionWizardProxyProps["onSuccess"];

jest.mock("./QuestionWizard/QuestionWizard", () => {
  const { QuestionWizard } = jest.requireActual(
    "./QuestionWizard/QuestionWizard"
  );

  const QuestionWizardProxy = (props: QuestionWizardProxyProps) => {
    onSuccess = props.onSuccess;
    onError = props.onError;

    return <QuestionWizard {...props} />;
  };

  return { QuestionWizard: QuestionWizardProxy };
});

test("it renders the QuestionWizard initially", () => {
  render(<Survey />);

  expect(
    screen.getByText("How often have you felt overwhelmed in the past month?")
  ).toBeInTheDocument();
});

test("it renders Confirmation after the onSuccess callback is called", () => {
  render(<Survey />);

  act(() => {
    onSuccess();
  });

  expect(
    screen.getByText("Your response has been securely recorded.")
  ).toBeInTheDocument();
});

test("it renders TryAgain after the onError callback is called", () => {
  render(<Survey />);

  act(() => {
    onError();
  });

  expect(
    screen.getByText("Something went wrong on our end.")
  ).toBeInTheDocument();
});
