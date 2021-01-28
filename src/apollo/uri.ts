export const SERVER_URI = process.env.NODE_ENV==="development" ? "http://localhost:4100/graphql" /* process.env.REACT_APP_SERVER_URI_DEV*/ : "http://builder-api.stayjanda.cloud:4000/graphql";

export default (() => {
  return SERVER_URI;
})();

