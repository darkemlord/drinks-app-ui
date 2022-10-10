const development = {
  url: "http://localhost:3000",
};

// update when is created
const production = {
  url: "https://drinks.com",
};

export const config =
  process.env.NODE_ENV === "development" ? development : production;

export const URL = config.url;
