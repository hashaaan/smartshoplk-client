import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import indexRoutes from "./routes";
import NotFound from "./views/NotFound";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return <Route {...prop} key={key} />;
          })}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
