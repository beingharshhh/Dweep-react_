import "./styles.css";
import insta from "./InstagramLogo.png";
import Linkdin from "./LinkedinLogo.png";
import vector from "./Vector.png";

export default function App() {
  return (
    <div>
    <div className="Header-Container">
    <div className="header">
      <div className="Left-Header">
        <h1>An inspiring design delivered to your inbox every morning</h1>
        <p>
          Our team scouts the internet for the best designs, illustrations and
          art and delivers a truly inspiring one every day to your inbox
        </p>
        <b>Show me how it looks</b>
        <div className="Register-Container">
          <input type="text" placeholder="Your E-mail address" />
          <button>Register Now</button>
          <span className="Freenodata">Free - No Spam - No Data Sharing</span>
        </div>
      </div>
      <div className="Right-Header">
        <div className="image">
          <img className="vector" src={vector} alt="img" />
        </div>
      </div>
    </div>
  </div>
  <div className="Footer-Container">
    <div className="Footer">
      <div className="Left-Footer">
        <span>Prompt Generator</span>
        <span>Dweep Daily </span> <br/>
        <span>All Contributors </span> <br/>
        <span>Your data on Dweep.io</span>
        <span>Contribute to Dweep</span>
      </div>
      <div className="Righ-Footer">
        <span>Dweep.io</span>
        <span>Made with love in India</span>
        <li>
          <img className="instagram" src={insta} alt=""/>
          <img className="linkedin" src={Linkdin} alt=""/>
        </li>
      </div>
      <span><a href="mailto:hello@dweep.io">hello@dweep.io</a></span>
    </div>
  </div>
  </div>
  );
}
