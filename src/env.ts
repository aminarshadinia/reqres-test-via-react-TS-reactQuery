const env = process.env.REACT_APP_ENV ?? '';
let envApiUrl = "";

if (env === "production") {
  envApiUrl = `${process.env.REACT_APP_PRODUCTION_DOMAIN}`;
} else if (env === "staging") {
  envApiUrl = `${process.env.REACT_APP_STAGING_DOMAIN}`;
} else {
  envApiUrl = `${process.env.REACT_APP_DEVELOPMENT_DOMAIN}`;
}

export const BASE_URL = envApiUrl;
export const appName = process.env.REACT_APP_NAME;
export const appVersion = process.env.REACT_APP_VERSION;
export const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
