import Home from "../views/Home";
import Smartphones from "../views/Smartphones";
import ProductView from "../views/ProductView";
import Cart from "../views/Cart";
import Login from "../views/Login";

let indexRoutes = [
  { path: "/", name: "Home", component: Home, exact: true },
  {
    path: "/smartphones",
    name: "Smartphones",
    component: Smartphones,
    exact: true,
  },
  {
    path: "/product",
    name: "Smartphones",
    component: ProductView,
    exact: true,
  },
  {
    path: "/cart",
    name: "Shopping Cart",
    component: Cart,
    exact: true,
  },
  {
    path: "/login",
    name: "Shopping Cart",
    component: Login,
    exact: true,
  },
];

export default indexRoutes;
