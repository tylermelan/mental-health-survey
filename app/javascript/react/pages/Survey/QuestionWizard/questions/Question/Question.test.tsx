import { render, screen } from "@testing-library/react";
import { Question } from "./Question";

test("it renders the question text", () => {
  render(
    <Question question="How are you?">
      <input type="text" />
    </Question>
  );

  expect(screen.getByText("How are you?")).toBeInTheDocument();
});
