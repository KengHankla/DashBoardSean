import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CookiesProvider } from "react-cookie";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "store/store";
import "./i18n";
import { ConfigProvider } from "antd";
import thTH from "antd/es/locale/th_TH";
import colorConstants from "./constants/colorConstants";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <React.StrictMode>
        <CookiesProvider>
          <ConfigProvider
            locale={thTH}
            theme={{
              token: {
                colorPrimary: colorConstants.Primary500,
              },
            }}
          >
            <App />
          </ConfigProvider>
        </CookiesProvider>
      </React.StrictMode>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
