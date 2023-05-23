import MoreNews from "./MoreNews";
import pc from "../Images/image-retro-pcs.jpg";
import gaming from "../Images/image-gaming-growth.jpg";
import top10 from "../Images/image-top-laptops.jpg";
import pcDetails from "../Images/pc details.jpg";
import gamingDetails from "../Images/video-game-details.png";
import top10Details from "../Images/top10 details.jpg";

const NewsCard = () => {
  const news = [
    {
      id: 1,
      image: pc,
      imageDetails: pcDetails,
      number: "01",
      title: "Reviving Retro PCs",
      details: "What happens when old PCs are given modern upgrades?",
      description:
        "Google launched the cloud-based ChromeOS Flex back in February 2022. Now, the company is bringing the operating system out of its beta phase and making it available to the general public. As such, ChromeOS Flex is receiving a number of improvements, including added device compatibility and security updates.",
    },
    {
      id: 2,
      image: top10,
      imageDetails: top10Details,
      number: "02",
      title: "Top 10 Laptops of 2022",
      details: "Our best picks for various needs and budgets.",
      description:
        "Performance: We want laptops with enough power to accommodate their target audience. An ultraportable laptop should be able to handle a standard office workload without excessive heat or fan noise. A gaming laptop should run today’s popular games.",
    },
    {
      id: 3,
      image: gaming,
      imageDetails: gamingDetails,
      number: "03",
      title: "The Growth of Gaming",
      details: "How the pandemic has sparked fresh opportunities.",
      description:
        "The global video game market size was valued at USD 195.65 billion in 2021 and is expected to expand at a compound annual growth rate (CAGR) of 12.9% from 2022 to 2030. Advances in technology and continued innovation in both hardware and software to enhance the real-time rendering of graphics are expected to drive the growth of the market over the forecast period. The proliferation of smartphones, the growing internet penetration rate, and the easy availability of games on the internet are expected to contribute to the growth of the market.",
    },
  ];

  return news.map((n) => {
    return (
      <MoreNews
        key={n.id}
        id={n.id}
        image={n.image}
        imageDetails={n.imageDetails}
        number={n.number}
        title={n.title}
        details={n.details}
        description={n.description}
      />
    );
  });
};

export default NewsCard;
