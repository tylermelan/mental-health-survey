module.exports = new Proxy(
  {},
  {
    get: () =>
      new Proxy(
        {},
        {
          get: (_, key) => key,
        }
      ),
  }
);
