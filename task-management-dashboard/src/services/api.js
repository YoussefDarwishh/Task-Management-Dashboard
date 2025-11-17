export const fakeDelay = (ms = 300) =>
  new Promise((resolve) => setTimeout(resolve, ms));