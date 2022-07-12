import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ModalProvider } from "./context/Modal";
import { EditCommentModalProvider } from "./context/EditCommentModal";
import "./index.css";
import App from "./App";
import configureStore from "./store";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <EditCommentModalProvider>
      <Provider store={store}>
        <App />
      </Provider>
      </EditCommentModalProvider>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
