import "./Styles/Index1.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

function Index1() {
  return (
    <div className="Total">
      <div className="first">
        <div className="fi">
          <h1 className="f1">Academy </h1>
          <h1 className="f1">of Your Business</h1>
          <p className="f2">
            Organizes work so teams know what to do,why it matters, and how
          </p>
          <p className="f2"> to get it done.</p>
        </div>
        <div className="both">
          <button className="both1">Get Started</button>
          <br />
          <p className="both2">
            <PlayCircleIcon className="i" /> View Demo
          </p>
        </div>
      </div>
      <div className="second">
        <div className="b1">
          <img
            className="img"
            src="pexels-zen-chung-5538007.jpg"
            alt="student"
            width="350px"
            height="350px"
          />
        </div>
        <div className="b2">
          <h1 className="b21">6K</h1>
          <p className="b22">Clients</p>
        </div>
        <div className="b3">
          <h1 className="b31">40%</h1>
          <p className="b32">Market</p>
        </div>

        <div className="b4">
          <img
            className="b41"
            src="pexels-luca-nardone-3651820.jpg"
            alt="hand"
            width="50px"
            height="50px"
          />
          <p className="b42">Bring your ideas to life</p>
        </div>
      </div>
      <div className="third"></div>
    </div>
  );
}
export default Index1;
