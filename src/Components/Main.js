import { Outlet } from "react-router";
import NavBar from "./NavBar";

const Main = () => {
  return (
    <>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Main;
