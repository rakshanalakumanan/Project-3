import "./Styles/Index4.css";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";

function Index4() {
  return (
    <div className="main">
      <div className="header">
        <div className="fir">
          <h1>Frequently Asked Questions</h1>
          <p>If you have any further questions please contact us.</p>
        </div>
        <div className="sec">
          <div className="fa">
            <div className="fa1">
              <p>
                Will i get lifetime updates? <AddIcon className="fabi" />
              </p>
            </div>
            <br />
            <div className="fa2">
              <p>
                Does Landify provide code kit as well?{" "}
                <ClearIcon className="fabi" />
              </p>
              <p>
                Landify is a landing page UI kit for Figma. The kit consists of
                170+ blocks from 15 categories with ready-to-use sample
                pages.Also,it comes with blocks for desktop,tablet and mobbile
                layouts.
              </p>
            </div>
            <br />
          </div>
          <div className="fb">
            <div className="fb1">
              <p>
                Can I use landify for a client's product?{" "}
                <AddIcon className="fabi" />
              </p>
            </div>
            <br />
            <div className="fb2">
              <p>
                Do you hava a free trial of Landify?{" "}
                <AddIcon className="fabi" />
              </p>
            </div>
            <br />
            <div className="fb3">
              <p>
                Who can use Landify <AddIcon className="fabi" />
              </p>
            </div>
            <br />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="f1">
          <h1>Landify</h1>
        </div>
        <div className="f2">
          <p className="f21">Menu</p>
          <ul>
            <li>Services</li>
            <li>Works</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="f3">
          <p className="f22">Connect</p>
          <ul>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="f4">
          <p>Subscribe tp our newsletter! </p>
          <div className="sub">
            <input type="email" placeholder="Your email" className="sub1" />
            &nbsp;
            <button className="sub2">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Index4;
