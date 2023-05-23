import future from "../Images/image-web-3-desktop.jpg";
import NewsCard from "./NewsCard";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.news}>
        <div className={classes.future}>
          <img src={future} alt="" />
          <div className={classes["future-text"]}>
            <h1>The Bright Future of Web 3.0? </h1>
            <div className={classes.details}>
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button>READ MORE</button>
            </div>
          </div>
        </div>
        <div className={classes.new}>
          <h1>New</h1>
          <h4>Hydrogen VS Electric Cars</h4>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          <hr />
          <h4>The Downsides of AI Artistry</h4>
          <p>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
          <hr />
          <h4>Is VC Funding Drying Up?</h4>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
      <div className={classes["more-news"]}>
        <NewsCard />
      </div>
    </div>
  );
};

export default Home;
