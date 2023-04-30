import "./Styles/Index2.css";

import WorkHistorySharpIcon from "@mui/icons-material/WorkHistorySharp";
import AccessTimeFilledSharpIcon from "@mui/icons-material/AccessTimeFilledSharp";
import SettingsApplicationsSharpIcon from "@mui/icons-material/SettingsApplicationsSharp";
import CorporateFareSharpIcon from "@mui/icons-material/CorporateFareSharp";

function Index2() {
  return (
    <div className="total">
      <div className="A1">
        <h1>The Process we follow</h1>
        <p>As academy of Business, we are going through</p>
        <p> the development cycle.</p>
      </div>
      <div className="A2">
        <div className="i1">
          <div className="iclass1">
            <WorkHistorySharpIcon />
          </div>
          <h1>Business idea</h1>
          <p>what you want your business to be.</p>
        </div>
        <div className="i1 ">
          <div className="iclass2">
            <AccessTimeFilledSharpIcon />
          </div>
          <h1>Planning</h1>
          <p>A business plan helps formalize your idea.</p>
        </div>
        <div className="i1">
          <div className="iclass3">
            <SettingsApplicationsSharpIcon />
          </div>

          <h1>Develop</h1>
          <p>ideation,prototyping,costing of your product.</p>
        </div>
        <div className="i1">
          <div className="iclass4">
            <CorporateFareSharpIcon />
          </div>

          <h1>Business Structure</h1>
          <p>key parts of your business.</p>
        </div>
      </div>
      <div className="A3">
        <div className="A31">
          <img
            src="pexels-andrea-piacquadio-3793238.jpg"
            alt="business"
            width="200px"
            height="250px"
          />
        </div>

        <div className="A32">
          <h1>Our Story</h1>
          <p>We specialise inorganising professionaltraining courses and</p>
          <p>we have been doing it in poland since 1994.As a academy of </p>
          <p>business.we are going through the development cycle. </p>
          <br />
          <button className="button2">Get started</button>
        </div>
      </div>
    </div>
  );
}
export default Index2;
