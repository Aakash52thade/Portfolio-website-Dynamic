import React, { createContext, useCallback, useReducer, useEffect } from "react";
import axios from 'axios';
import Hero from "./components/Hero";

// Create Context
const DoraContext = createContext();

// Type
const type = {
  BLOG: "BLOG",
  COLOR: "COLOR",
  PORTFOLIO_MODAL: "PORTFOLIO_MODAL",
};
const { BLOG, COLOR, PORTFOLIO_MODAL } = type;

const API = "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae/";

// Initial Value
const initialState = {
  color: "yellow",
  blog: null,
  // blogs: [
  //   {
  //     id: 1,
  //     date: "23 Oct 2022",
  //     img: "images/blog/1.png",
  //     title: "User interface design or user interface engineering",
  //     catagory: "UI/UX Design",
  //   },
  //   {
  //     id: 2,
  //     date: "13 Dec 2022",
  //     img: "images/blog/2.png",
  //     title: "Web design encompasses many different skills",
  //     catagory: "Web Design",
  //   },
  //   {
  //     id: 3,
  //     date: "23 Dec 2022",
  //     img: "images/blog/3.png",
  //     title: "Jim Morisson Says when the musics over turn off the light",
  //     catagory: "Web Development",
  //   },
  // ],
  portfolio_modal: false,
  userInfo: null, // Add userInfo to hold user data
};

// Reducer
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case BLOG:
      return {
        ...state,
        blog: payload,
      };
    case PORTFOLIO_MODAL:
      return {
        ...state,
        portfolio_modal: payload,
      };
    case COLOR:
      return {
        ...state,
        color: payload,
      };
    case "SET_USER_INFO": // Add a new case to set user info
      return {
        ...state,
        userInfo: payload,
      };
    default:
      return state;
  }
};

// Watson State
const DoraState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch user info
  useEffect(() => {
    axios.get(API)
      .then(res => {
        dispatch({
          type: "SET_USER_INFO",
          payload: res.data.user,
        });
      })
      .catch(err => console.log(err));
  }, []);

  

  const { color, blog, blogs, portfolio_modal, userInfo } = state;

  return (
    <DoraContext.Provider
      value={{
        color,
        blogs,
        blog,
        portfolio_modal,
        userInfo,
      }}
    >
      {children}
    </DoraContext.Provider>
  );
};

export default DoraState;
export { DoraContext };
