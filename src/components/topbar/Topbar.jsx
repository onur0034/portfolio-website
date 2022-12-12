import "./topbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

export default function Topbar() {
  return (
    <div className="topbar" id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+90 5455602139</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span>onur.un0034@gmail.com</span>
          </div>
        </div>

        <div className="right"></div>
      </div>
    </div>
  );
}
