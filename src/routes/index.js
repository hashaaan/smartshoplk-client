import Home from "../views/Home";
import Smartphones from "../views/Smartphones";
import Cart from "../views/Cart";
import ProductView from "../views/ProductView";
import Login from "../views/Login";

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
  {
    path: "/cart",
    name: "Shopping Cart",
    component: Cart,
    exact: true,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    exact: true,
  },
  { path: "/", name: "Home", component: Home, exact: true },
];

export default indexRoutes;
