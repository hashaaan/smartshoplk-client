import Home from "../views/Home";
import Smartphones from "../views/Smartphones";
import ProductView from "../views/ProductView";

let indexRoutes = [
  {
    path: "/smartphones",
    name: "Smartphones",
    component: Smartphones,
    exact: true,
  },
  {
    path: "/product",
    name: "Product View",
    component: ProductView,
    exact: true,
  },
  { path: "/", name: "Home", component: Home, exact: true },
];

export default indexRoutes;
