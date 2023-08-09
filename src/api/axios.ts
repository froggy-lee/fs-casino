import axios from "axios";
import { LocalStorage } from "@/utils/localStorage";

const TestRequset = axios.create({
  timeout: 5000,
  baseURL: "https://jsonplaceholder.typicode.com",
});

const SSRRequest = axios.create({
  timeout: 10000,
  baseURL: "https://node-be-ix19.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});

const authRequest = axios.create({
  timeout: 10000,
  baseURL: "https://node-be-ix19.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});

authRequest.interceptors.request.use(async (request) => {
  const token = LocalStorage.get("userToken");

  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
});

authRequest.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // LocalStorage.remove(ECO_WALL_TOKEN);
      // const auth = getAuth();
      // if (auth.currentUser) {
      //   const token = await getIdToken(auth.currentUser, true);
      //   originalRequest.headers.Authorization = `Bearer ${token}`;
      //   return authRequest(originalRequest);
      // }
      LocalStorage.clear();
      // if (typeof window !== 'undefined') {
      //   window.open('/', '_self')
      // }
    } else {
      // Retried faile => Log user out
      // await signOut(getAuth());
      // await removeServerCookieRequuest();
    }

    // eslint-disable-next-line no-undef
    return Promise.reject(error.response.data);
  }
);

TestRequset.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // LocalStorage.remove(ECO_WALL_TOKEN);
      // const auth = getAuth();
      // if (auth.currentUser) {
      //   const token = await getIdToken(auth.currentUser, true);
      //   originalRequest.headers.Authorization = `Bearer ${token}`;
      //   return authRequest(originalRequest);
      // }
      //LocalStorage.remove(GO_DEP_TOKEN)
      // if (typeof window !== 'undefined') {
      //   window.open('/', '_self')
      // }
    } else {
      // Retried faile => Log user out
      // await signOut(getAuth());
      // await removeServerCookieRequuest();
    }

    // eslint-disable-next-line no-undef
    return Promise.reject(error.response.data);
  }
);

SSRRequest.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // LocalStorage.remove(ECO_WALL_TOKEN);
      // const auth = getAuth();
      // if (auth.currentUser) {
      //   const token = await getIdToken(auth.currentUser, true);
      //   originalRequest.headers.Authorization = `Bearer ${token}`;
      //   return authRequest(originalRequest);
      // }
      //LocalStorage.remove(GO_DEP_TOKEN)
      // if (typeof window !== 'undefined') {
      //   window.open('/', '_self')
      // }
    } else {
      // Retried faile => Log user out
      // await signOut(getAuth());
      // await removeServerCookieRequuest();
    }

    // eslint-disable-next-line no-undef
    return Promise.reject(error.response.data);
  }
);

export { TestRequset, SSRRequest, authRequest };
