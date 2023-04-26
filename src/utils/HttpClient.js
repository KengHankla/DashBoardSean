import join from "url-join";
import { API_URL } from "constants/common";

import axios from "axios";
import Cookies from "universal-cookie/cjs";
import { logout } from "api/common/authentication";

const isAbsoluteURLRegex = /^(?:\w+:)\/\//;

axios.interceptors.request.use(async (config) => {
  if (!isAbsoluteURLRegex.test(config.url)) {
    config.url = join(API_URL, config.url);
  }
  const cookies = new Cookies();
  const userToken = cookies.get("token");
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
    if (error.response.status === 401) {
      logout();
      return axios.request(error.config);
    }
    return Promise.reject(error);
  }
);

export const httpClient = axios;
