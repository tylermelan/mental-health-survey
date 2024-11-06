import { render, screen } from "@testing-library/react";
import { SupportedQuestion } from "./SupportedQuestion";

let disabled: boolean;

beforeEach(() => {
  render(<SupportedQuestion disabled={disabled} />);
});

describe("disabled is true", () => {
  beforeAll(() => {
    disabled = true;
  });

  test("range is disabled", () => {
    expect(screen.getByTestId("supported-question-range")).toBeDisabled();
  });
});

describe("disabled is false", () => {
  beforeAll(() => {
    disabled = false;
  });

  test("range is not disabled", () => {
    expect(screen.getByTestId("supported-question-range")).not.toBeDisabled();
  });
});
