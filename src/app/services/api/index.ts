import axios from "axios";

const PUBLIC_URI = "http://localhost:1337";

const createApiClient = (baseURL) => {
    return axios.create({baseURL});
};

const apiClient = createApiClient(PUBLIC_URI);

export const makeApiCall = async (uri, data, options) => {
  try {
      const headers = {
          "Accept": "application/json",
          "Content-Type": "application/json"
      };

      let url = `${PUBLIC_URI}${uri}`;
      const response = await apiClient({url, data, method: options.method, headers});
      return response.data;
  } catch (err) {
      console.error(err);
      throw err;
  }
};
