import "./testimonials.scss";

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <br />
      <div className="container">
        <div className="card">
          <div className="top">
            <img
              src="https://www.pngkey.com/png/full/7-75406_arrow-signs-png-transparent-images-clipart-icons-pngriver.png"
              alt=""
              className="left"
            />
            <img
              src="https://cdn1.ntv.com.tr/gorsel/oHvSjagH7kuUC_MuM5Qr4w.jpg?width=1000&mode=crop&scale=both"
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam hic
            laborum unde
          </div>
          <div className="bottom">
            <h3>Sanna Marin</h3>
            <h4>President of Finland</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
