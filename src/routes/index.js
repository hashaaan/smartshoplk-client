import Home from "../views/Home";
import Smartphones from "../views/Smartphones";
import Cart from "../views/Cart";

let indexRoutes = [
  {
    path: "/smartphones",
    name: "Smartphones",
    component: Smartphones,
  },
  {
    path: "/cart",
    name: "Shopping Cart",
    component: Cart,
  },
  { path: "/", name: "Home", component: Home, exact: true },
];

export default indexRoutes;
