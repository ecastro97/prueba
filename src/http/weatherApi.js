import axios from "axios";
import { getCurrentEnvironment } from "./environmentHandler.js";

const ENV_DATA = getCurrentEnvironment();
const weatherAPI = axios.create({
    baseURL: ENV_DATA.WEATHERURL,
  });

export { weatherAPI };