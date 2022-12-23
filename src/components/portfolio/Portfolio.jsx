import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useState } from "react";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <small>
            <img className="e-shop" src="assets/e-shop.png" alt="" />
          </small>
          <h3>E-shop App</h3>
        </div>
        <div className="item">
          <small>
            <img className="e-shop" src="assets/e-shop.png" alt="" />
          </small>
          <h3>E-shop App</h3>
        </div>
        <div className="item">
          <small>
            <img className="e-shop" src="assets/e-shop.png" alt="" />
          </small>
          <h3>E-shop App</h3>
        </div>
        <div className="item">
          <small>
            <img className="e-shop" src="assets/e-shop.png" alt="" />
          </small>
          <h3>E-shop App</h3>
        </div>
        <div className="item">
          <small>
            <img className="e-shop" src="assets/e-shop.png" alt="" />
          </small>
          <h3>E-shop App</h3>
        </div>
        <div className="item">
          <small>
            <img className="e-shop" src="assets/e-shop.png" alt="" />
          </small>
          <h3>E-shop App</h3>
        </div>
      </div>
    </div>
  );
}
