import { useState } from "react";
import "./works.scss";


export default function Works() {
  const [ currentSlide, setCurrentSlide ] = useState(0);
  const data = [
    {
      id: 1,
      icon: "https://w7.pngwing.com/pngs/588/140/png-transparent-mobile-app-euclidean-icon-click-the-ppt-phone-material-blue-gadget-hand.png",
      title: "Mobile Application",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img: "assets/cross.jpg",
    },
    {
      id: 2,
      icon: "https://flyclipart.com/thumb2/github-png-icon-free-download-813498.png",
      title: "Github Profile",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img: "assets/obey.jpg",
    },
    {
      id: 3,
      icon: "https://img1.pngindir.com/20180406/hpw/kisspng-linkedin-logo-computer-icons-comcast-business-get-started-now-button-5ac6f543cb6bf0.2094725315229883558332.jpg",
      title: "LinkedIn Profile",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img: "assets/donotfear.jpg",
    },
  ];

  const handleClick = (way) => {
    console.log("clicked");
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="left-container">
                  <div className="img-container">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        alt=""
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        alt=""
        className="arrow right"
        onClick={() => handleClick()}
      />
    </div>
  );
}
