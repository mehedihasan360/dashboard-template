import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../modules/Authentication/pages/Login";
import Shop from "../modules/Shop/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
