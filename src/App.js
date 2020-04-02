import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import HomePage from "./Pages/HomePage";
import { Provider } from "react-redux";
import { store } from "./State/store";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <HomePage></HomePage>
      </Layout>
    </Provider>
  );
}

export default App;
