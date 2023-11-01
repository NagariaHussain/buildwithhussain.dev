import { FrappeApp } from "frappe-js-sdk";
import { FRAPPE_CMS_URL } from "../data/constants";

export function getFrappeApp() {
  const frappe = new FrappeApp(FRAPPE_CMS_URL, {
    useToken: true,
    // Pass a custom function that returns the token as a string - this could be fetched from LocalStorage or auth providers like Firebase, Auth0 etc.
    token: () => getToken(),
    // This can be "Bearer" or "token"
    type: "token",
  });

  function getToken() {
    return `${import.meta.env.API_KEY}:${import.meta.env.API_SECRET}`;
  }

  return frappe;
}

export function getFrappeDB() {
  const frappe = getFrappeApp();
  return frappe.db();
}

export function getFrappeCall() {
  const frappe = getFrappeApp();
  return frappe.call();
}

export function getFullAssetURL(url: string) {
  return `${FRAPPE_CMS_URL}${url}`;
}
