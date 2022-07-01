let ENVIRONMENT = process.env.NODE_ENV;
// Detect que ambiente en que se encuentra el proyecto
if (process.env.REACT_APP_ENV) ENVIRONMENT = process.env.REACT_APP_ENV;

export function getCurrentEnvironment() {
  switch (ENVIRONMENT) {
    case "development":
      return {
        WEATHERURL: "https://weatherdbi.herokuapp.com/data/weather/",
      };
    case "qa":
      return {
        WEATHERURL: "https://weatherdbi.herokuapp.com/data/weather/",
      };
    case "production":
      return {
        WEATHERURL: "https://weatherdbi.herokuapp.com/data/weather/",

      };
    default:
      return {
        WEATHERURL: "https://weatherdbi.herokuapp.com/data/weather/",
      };
  }
}
