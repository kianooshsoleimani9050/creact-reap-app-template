import { Cookies } from "react-cookie";
import { COOKIE_MAX_AGE } from "../../constant/base";
const cookie = new Cookies();
const getCookie = (cookieName) => cookie.get(cookieName);
const setCookie = (cookieName, value, options = {}) =>
  cookie.set(cookieName, value, { maxAge: COOKIE_MAX_AGE, ...options });
const removeCookie = (cookieName) => cookie.remove(cookieName);
export const isTokenValidated = (cookieName) => {
  const cookie = getCookie(cookieName);
  if (cookie) {
    return true;
  }
  return false;
};
export const setCookieFromApi = (cookieName, value) => {
  setCookie(cookieName, value);
};
export const removeCookieHandler = (cookieName) => removeCookie(cookieName);
export const checkCanUseCookie = () => navigator.cookieEnabled;
