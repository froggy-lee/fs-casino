import axios from "axios";

const SSRRequest = axios.create({
  timeout: 2000,
  baseURL: "https://jsonplaceholder.typicode.com",
});

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

export { SSRRequest };
