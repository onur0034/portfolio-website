import "./intro.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/portfolio.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi Guys!</h2>
          <h1>I am Onur Un</h1>
          <h3>Frontend Developer</h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDownIcon
            className="keyboardArrowDownIcon"
            fontSize="large"
          />
        </a>
      </div>
    </div>
  );
}
