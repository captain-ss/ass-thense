import Form from "../pages/Form";
import Home from "../pages/Home";
import Success from "../pages/Success";

const publicRoutes = [
  { path: "/", component: <Home /> },
  { path: "/success", component: <Success /> },
  { path: "/form", component: <Form /> },
];

export { publicRoutes };
