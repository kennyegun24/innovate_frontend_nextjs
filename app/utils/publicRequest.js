import { getSession } from "next-auth/react";

const { default: axios } = require("axios");

const BASE_URL = "/api";
const railsEndpoint = "http://localhost:4000/api/v1";
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

export const newComment = async ({ token, post_id, text }) => {
  const authRailsRequest = axios.create({
    baseURL: `${railsEndpoint}/auth`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  await authRailsRequest.post("post_comments", {
    post_id,
    text,
  });
};

export const likePost = async ({ token, post_id }) => {
  const authRailsRequest = axios.create({
    baseURL: `${railsEndpoint}/auth`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  await authRailsRequest.post(`post/${post_id}/like`);
};
