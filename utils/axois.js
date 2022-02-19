import axios from "axios";
import getConfig from "next/config";
import { parseCookies } from "nookies";
import { removeCookie } from "./cookie";
import toaster from "./toaster";

const { publicRuntimeConfig } = getConfig();

export const axiosApi = axios.create({
  baseURL: publicRuntimeConfig.apiUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer token`,
  },
});

export const axiosPost = async (url, data, token = null, contentType = "application/json") => {
  let response = {};
  if (!token) {
    let cookies = parseCookies();
    if (cookies?.["player-auth0-token"]) token = cookies["player-auth0-token"];
  }

  try {
    const result = await axiosApi.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": contentType,
      },
    });
    response.status = true;
    response.data = result.data;
  } catch (e) {
    if (e.response) {
      if (e.response.status == 403 || e.response.status == 422) {
        response.status = false;
        response.message = e.response.data.message;
      } else if (e.response.status == 401) {
        removeCookie("player-auth0-token");
        response.status = false;
        response.isSessionExpire = true;
      } else if (e.response.status == 500) {
        response.status = false;
        response.message = "Internal server error";
      } else {
        response.status = false;
        response.message = "something went wrong";
      }
    }
    toaster("error", response.message);
  }
  return response;
};

export const axiosGet = async (url, token = null) => {
  let response = {};
  if (!token) {
    let cookies = parseCookies();
    if (cookies?.["player-auth0-token"]) token = cookies["player-auth0-token"];
  }

  try {
    const result = await axiosApi.get(url, {
      headers: {
        Authorization: token ? `Bearer ${token}` : null,
      },
    });
    response.status = true;
    response.data = result.data;
  } catch (e) {
    if (e.response) {
      if (e.response.status == 403 || e.response.status == 422) {
        response.status = false;
        response.message = e.response.data.message;
      } else if (e.response.status == 401) {
        removeCookie("player-auth0-token");
        response.status = false;
        response.isSessionExpire = true;
      } else if (e.response.status == 500) {
        response.status = false;
        response.message = "Internal server error";
      } else {
        response.status = false;
        response.message = "something went wrong";
      }
    }
  }
  return response;
};

export const axiosDelete = async (url, token = null) => {
  let response = {};
  try {
    const result = await axiosApi.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    response.status = true;
    response.data = result.data;
  } catch (e) {
    if (e.response.status == 403 || e.response.status == 422) {
      response.status = false;
      response.message = e.response.data.message;
    } else if (e.response.status == 401) {
      removeCookie("player-auth0-token");
      response.status = false;
      response.isSessionExpire = true;
    } else if (e.response.status == 500) {
      response.status = false;
      response.message = "Internal server error";
    } else {
      response.status = false;
      response.message = "something went wrong";
    }
    toaster("error", response.message);
  }
  return response;
};
