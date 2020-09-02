import Home from "../views/Home";
import Smartphones from "../views/Smartphones";
import ProductView from "../views/ProductView";

let indexRoutes = [
  { path: "/", name: "Home", component: Home, exact: true },
  {
    path: "/smartphones",
    name: "Smartphones",
    component: Smartphones,
    exact: true,
  },
];

export default indexRoutes;
