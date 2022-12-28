import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tyler Durden",
      title: "soap maker",
      img: "https://i.pinimg.com/736x/05/1f/79/051f79e06b7fed6fb935851d7882a5e6.jpg",
      icon: "assets/twitter-logo.png",
      desc: "An entire generation pumping gas, waiting tables, slaves with white collars",
      featured: true,
    },
    {
      id: 2,
      name: "Sanna Marin",
      title: "President of Finland",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/77/Sanna_Marin-_Europe_needs_strategic_autonomy_in_energy%2C_food%2C_defence_and_technology_03_%28cropped%29.jpg",
      icon: "assets/twitter-logo.png",
      desc: "injustice can couse chaos, but it should not be forgotten that what causes injustice is the uneducated power holders.",
      featured: true,
    },
    {
      id: 3,
      name: "Tom Hanks",
      title: "Artist",
      img: "https://tr.web.img3.acsta.net/pictures/16/04/26/10/00/472541.jpg",
      icon: "assets/twitter-logo.png",
      desc: "why didnt you love me jenny?",
      featured: true,
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <br />
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured": "card"}>
            <div className="top">
              <img
                src={d.icon}
                alt=""
                className="left"
              />
              <img
                src={d.img}
                alt=""
                className="user"
              />
              <small>
                <img
                  src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png"
                  alt=""
                  className="right"
                />
              </small>
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
