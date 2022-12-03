import React from "react";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import store from "./components/redux/state.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          addPost={store.addPost.bind(store)}
          state={store.getState()}
          updateNewPostText={store.updateNewPostText.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);
/* setInterval(render, 1000);
 */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
