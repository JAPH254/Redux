import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store from "./todoRedux/store.js";
// import { ContextProvider } from "./todoRedux/userContext/Context.jsx";
import { Provider } from "react-redux";
import { UIContextProvider } from "./todoRedux/todoContext/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ContextProvider> */}
    <Provider store={store}>
      <UIContextProvider>
        <App />
      </UIContextProvider>
    </Provider>
    {/* </ContextProvider> */}
  </React.StrictMode>
);
