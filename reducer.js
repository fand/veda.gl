import { actionTypes } from "./actions";

export const exampleInitialState = {
  lang: "en",
  isMenuVisible: false,
  isHeaderVisible: false
};

export default function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_MENU:
      return {
        ...state,
        isMenuVisible: !state.isMenuVisible
      };
    case actionTypes.HIDE_MENU:
      return {
        ...state,
        isMenuVisible: false
      };
    case actionTypes.SHOW_HEADER:
      return {
        ...state,
        isHeaderVisible: true
      };
    case actionTypes.HIDE_HEADER:
      return {
        ...state,
        isHeaderVisible: false
      };
    case actionTypes.SET_LANGUAGE:
      if (action.lang === "en") {
        window.history.replaceState({}, document.title, location.pathname);
      }
      if (action.lang === "ja") {
        window.history.replaceState(
          {},
          document.title,
          location.pathname + "?lang=ja"
        );
      }
      return {
        ...state,
        lang: action.lang
      };
    default:
      return state;
  }
}
