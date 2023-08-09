const set = (data: any, key: string) => {
  if (typeof window !== "undefined") {
    if (!window.localStorage || !window.JSON || !key) {
      return;
    }

    window.localStorage.setItem(key, JSON.stringify(data));
  }
};

const get = (key: string) => {
  if (typeof window !== "undefined") {
    if (!window.localStorage || !window.JSON || !key) {
      return;
    }
    const item = window.localStorage.getItem(key);

    if (!item) {
      return;
    }

    return JSON.parse(item);
  }
};

const remove = (key: string) => {
  if (typeof window !== "undefined") {
    if (!window.localStorage || !window.JSON || !key) {
      return;
    }
    window.localStorage.removeItem(key);
  }
};

const clear = () => {
  if (typeof window !== "undefined") {
    if (!window.localStorage || !window.JSON) {
      return;
    }
    window.localStorage.clear();
  }
};

export const LocalStorage = {
  set,
  get,
  remove,
  clear,
};

export const setLocalStorageUser = (id: string, token: string) => {
  if (typeof window !== "undefined") {
    if (!window.localStorage || !window.JSON) {
      return;
    }

    window.localStorage.setItem("username", JSON.stringify(id));
    window.localStorage.setItem("userToken", JSON.stringify(token));
  }
};

export const auth = () => {
  if (typeof window !== "undefined") {
    if (!window.localStorage || !window.JSON) {
      return;
    }

    return window.localStorage.getItem("auth");
  } else return false;
};
