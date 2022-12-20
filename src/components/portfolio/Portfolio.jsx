import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Design</li>
        <li>Branding</li>
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
