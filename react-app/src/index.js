import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ModalProvider } from "./context/Modal";
import { AuthFormsModalProvider } from "./context/AuthFormsModal";
import "./index.css";
import App from "./App";
import configureStore from "./store";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <AuthFormsModalProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </AuthFormsModalProvider>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
