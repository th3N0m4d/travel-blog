const DEFAULT_LIMIT = 55;

export const summarizeContent = (sentence, limit = DEFAULT_LIMIT) =>
  sentence
    .split(" ")
    .filter((__, i) => i + 1 <= limit)
    .join(" ");
