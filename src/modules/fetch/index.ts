import axios from "axios";

export const fetch = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export const setAuthorizationHeader = (token: string) => {
  fetch.defaults.headers["Authorization"] = `Bearer ${token}`;
};

export const removeAuthorizationHeader = () => {
  delete fetch.defaults.headers["Authorization"];
};
