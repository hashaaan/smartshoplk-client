import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import "./App.css";
import AppRouter from "./AppRouter";

function App(props) {
  const { store, persistor } = props;

  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<h1>Loading...</h1>}>
          <AppRouter />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
