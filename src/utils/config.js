export const api = "https://docagenda-backend.up.railway.app/api";
export const uploads = "https://docagenda-backend.up.railway.app/uploads";

export const requestConfig = (method, data, token) => {
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (data) {
    config.body = JSON.stringify(data);
  }

  return config;
};
