import join from "url-join";
import { apiUrl } from "constants/common";

import axios from "axios";
import Cookies from "universal-cookie/cjs";
import { RefreshNewToken } from "api/common/authentication";

const isAbsoluteURLRegex = /^(?:\w+:)\/\//;

axios.interceptors.request.use(async (config) => {
  if (!isAbsoluteURLRegex.test(config.url)) {
    config.url = join(apiUrl, config.url);
  }
  const cookies = new Cookies();
  const userToken = cookies.get("accessToken");
  if (userToken) {
    config.headers = { Authorization: `Bearer ${userToken}` };
  }
  config.timeout = 700000;
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const access_token = await RefreshNewToken();
      axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);

export const httpClient = axios;
