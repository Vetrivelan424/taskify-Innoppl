const KEY = 'user-management-app';

export const loadState = () => {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return undefined; // let reducers init
    return JSON.parse(raw);
  } catch (e) {
    console.log(e)
  }
};

export const saveState = (state) => {
  try {
    const json = JSON.stringify(state);
    localStorage.setItem(KEY, json);
  } catch (e) {
   console.log(e)
  }
};

export const clearState = () => {
  try {
    localStorage.removeItem(KEY);
  } catch (e) {
    console.log(e)
  }
};