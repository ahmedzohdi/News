import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Main from "./Components/Main";
import classes from "./App.module.css";
import NewDetails from "./Components/NewDetails";
import FutureOfWeb from "./Components/FutureOfWeb";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <Home /> },

        { path: "/future-of-web", element: <FutureOfWeb /> },
        { path: "/property/:details", element: <NewDetails /> },
      ],
    },
  ]);
  return (
    <div className={classes.app}>
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
    </div>
  );
}

export default App;
