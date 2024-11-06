import { render, screen } from "@testing-library/react";
import { ActivitiesQuestion } from "./ActivitiesQuestion";

let disabled: boolean;

beforeEach(() => {
  render(<ActivitiesQuestion disabled={disabled} />);
});

describe("disabled is true", () => {
  beforeAll(() => {
    disabled = true;
  });

  test("textarea is disabled", () => {
    expect(screen.getByTestId("activities-question-textarea")).toBeDisabled();
  });
});

describe("disabled is false", () => {
  beforeAll(() => {
    disabled = false;
  });

  test("textarea is not disabled", () => {
    expect(
      screen.getByTestId("activities-question-textarea")
    ).not.toBeDisabled();
  });
});
