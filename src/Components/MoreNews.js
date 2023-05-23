import { useNavigate } from "react-router-dom";
import classes from "./Home.module.css";

const MoreNews = (props) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/property/${props.id}`, { state: props })}
      className={classes["news-info"]}
    >
      <img src={props.image} alt="" />
      <div>
        <h1>{props.number}</h1>
        <h4>{props.title}</h4>
        <p>{props.details}</p>
      </div>
    </div>
  );
};

export default MoreNews;
