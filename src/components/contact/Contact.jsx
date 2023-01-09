import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    
    e.preventDefault();
    setMessage(true);
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2652/2652673.png"
          alt=""
        />
      </div>
      <div className="right">
        <h2>contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="email" />

          <textarea placeholder="message"></textarea>

          <button type="submit">send</button>
          {message && <span>thx for opinions!</span>}
        </form>
      </div>
    </div>
  );
}
