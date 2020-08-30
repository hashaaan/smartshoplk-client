import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import "./App.css";
import indexRoutes from "./routes";
import NotFound from "./views/NotFound";

function App(props) {
  const { store, persistor } = props;

  return (
    <div>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<h1>Loading...</h1>}>
          <Router>
            <Switch>
              {indexRoutes.map((prop, key) => {
                return <Route {...prop} key={key} />;
              })}
              <Route component={NotFound} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
