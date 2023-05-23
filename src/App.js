import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Main from "./Components/Main";
import classes from "./App.module.css";
import NewDetails from "./Components/NewDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/property/:details", element: <NewDetails /> },
      ],
    },
  ]);
  return (
    <div className={classes.app}>
      <NavBar />
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
    </div>
  );
}

export default App;
