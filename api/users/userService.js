import { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import JSXStyle from "styled-jsx/style";
import { SET_LOGIN, SET_USER } from "../../redux/reducer/login";

const url = "https://tool-mamagement-backend-production.up.railway.app/user";

export const createAccount = async (user) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const response = await fetch(url + "/createAccount", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(user),
  });
  const res = await response.json();
  console.log(res);
  return res;
};

export const loginUser = async (user) => {
  const {username , password} = user
 
  const headers = {
    "Content-Type": "application/json",
  };
  const response = await fetch(url + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(user),
  });
  const res = await response.json();
  return res;
};

export const updateProfile = async (user) => {
  const {firstName , lastName , id} = user
  console.log(user);
  const headers = {
    "Content-Type": "application/json",
  };
  const response = await fetch(url + "/updateProfile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(user),
  });
  const res = await response.json();
  return res;
};