export const postSurvey = (fromData: FormData) => {
  const csrfToken =
    document.querySelector<HTMLMetaElement>("meta[name='csrf-token']")
      ?.content ?? "";

  return fetch("/", {
    method: "POST",
    headers: { "X-CSRF-Token": csrfToken },
    body: fromData,
  });
};
