import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import MainLayout from "./commonComponents/MainLayout";
import TodoListContainer from "./pages/TodoListPage/containers/TodoListContainer";
import { configureStore } from "./store/configureStore";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainLayout>
        <TodoListContainer />
      </MainLayout>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
