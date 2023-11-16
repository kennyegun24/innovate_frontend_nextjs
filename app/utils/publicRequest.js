const { default: axios } = require("axios");

const BASE_URL = "/api";
const railsEndpoint = "http://192.168.252.193:4000/api/v1";
export const publicNextRequest = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const unauthRailsRequest = axios.create({
  baseURL: railsEndpoint,
});

const token = "";

export const authRailsRequest = axios.create({
  baseURL: `${railsEndpoint}/auth`,
  headers: `Authorization: ${token}`,
});
