import { render, screen } from "@testing-library/react";
import { OverwhelmedQuestion } from "./OverwhelmedQuestion";

let disabled: boolean;

beforeEach(() => {
  render(<OverwhelmedQuestion disabled={disabled} />);
});

describe("disabled is true", () => {
  beforeAll(() => {
    disabled = true;
  });

  test("radio buttons are disabled", () => {
    expect(screen.getByDisplayValue("sometimes")).toBeDisabled();
  });
});

describe("disabled is false", () => {
  beforeAll(() => {
    disabled = false;
  });

  test("radio buttons are not disabled", () => {
    expect(screen.getByDisplayValue("sometimes")).not.toBeDisabled();
  });
});
