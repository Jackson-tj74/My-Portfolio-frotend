import { decrypt, encrypt, generateDeviceId } from "./SharedUtils";

export const BASE_URL = `${import.meta.env.VITE_SERVER_URL}/api/v1`;

export const AuthHeader = (type) => {
  const token = localStorage.getItem("token");
  const headers = {};

  if (type === 'json') {
    headers['Content-Type'] = 'application/json';
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
};