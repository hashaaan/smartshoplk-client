import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import indexRoutes from "./routes";
import "./App.css";
import NotFound from "./views/NotFound";

function App(props) {
  const { store, persistor } = props;

  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<h1>Loading...</h1>}>
          <React.StrictMode>
            <Router>
              <Switch>
                {indexRoutes.map((prop, key) => {
                  return <Route {...prop} key={key} />;
                })}
                <Route component={NotFound} />
              </Switch>
            </Router>
          </React.StrictMode>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
