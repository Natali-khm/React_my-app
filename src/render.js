import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { addPost } from "./components/redux/state";
import { updateNewPostText } from "./components/redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};
