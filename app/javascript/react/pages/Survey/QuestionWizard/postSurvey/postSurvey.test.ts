import { postSurvey } from "./postSurvey";

window.fetch = jest.fn();

describe("postSurvey", () => {
  const meta = document.createElement("meta");
  meta.name = "csrf-token";
  meta.content = "WIrftmBRa7DfJgEC";
  document.head.append(meta);

  test("it calls fetch with formData and X-CSRF-Token", () => {
    const fromData = new FormData();
    postSurvey(fromData);

    expect(window.fetch).toHaveBeenCalledWith("/", {
      method: "POST",
      headers: { "X-CSRF-Token": meta.content },
      body: fromData,
    });
  });
});
