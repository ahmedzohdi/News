import { useLocation } from "react-router-dom";
import classes from "./NewDetails.module.css";

const NewDetails = () => {
  const location = useLocation();
  const details = location.state;
  return (
    <div className={classes.details}>
      <img src={details.imageDetails} alt="" />
      <h1>{details.title}</h1>
      <p>{details.description}</p>
    </div>
  );
};
export default NewDetails;
