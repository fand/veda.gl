export const actionTypes = {
  TOGGLE_MENU: "TOGGLE_MENU",
  HIDE_MENU: "HIDE_MENU",
  SHOW_HEADER: "SHOW_HEADER",
  HIDE_HEADER: "HIDE_HEADER",
  SET_LANGUAGE: "SET_LANGUAGE"
};

export function toggleMenu() {
  return { type: actionTypes.TOGGLE_MENU };
}

export function hideMenu() {
  return { type: actionTypes.HIDE_MENU };
}

export function showHeader() {
  return { type: actionTypes.SHOW_HEADER };
}

export function hideHeader() {
  return { type: actionTypes.HIDE_HEADER };
}

export function setLanguage(lang) {
  return {
    type: actionTypes.SET_LANGUAGE,
    lang
  };
}
