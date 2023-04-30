import "./Styles/Index5.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CameraIcon from "@mui/icons-material/Camera";

import { useState } from "react";
import Index1 from "./Index1";
import Index2 from "./Index2";
import Index3 from "./Index3";
import Index4 from "./Index4";

/*import { usestate } from "react";*/
function Index5() {
  const [set, getset] = useState("");
  const [set1, getset1] = useState("");
  const [set2, getset2] = useState("");
  const [set3, getset3] = useState("");

  function Method(data) {
    if (data == "resources") {
      getset3("");
      getset2("");
      getset1("");
      getset(data);
    }
    if (data == "Product") {
      getset3("");
      getset2("");
      getset1(data);
      getset("");
    }
    if (data == "Solutions") {
      getset3("");
      getset2(data);
      getset1("");
      getset("");
    }
    if (data == "Subscribe") {
      getset3(data);
      getset2("");
      getset1("");
      getset("data");
    }
  }

  /* const [fix, setfix] = usestate(false);
  function sexFixed() {
    if (window.scrolly >= 300) {
      setfix(true);
    } else {
      setfix(false);
    }
  }
  window.addEventListener("scroll", setFixed);*/

  return (
    <div className="nav">
      <div className="navbar">
        <div className="navbar1">
          <h1>
            <CameraIcon className="dev" />
            Landify
          </h1>
        </div>
        <div className="navbar2 ">
          <button className="nobutton" onClick={() => Method("resources")}>
            Resources <KeyboardArrowDownIcon className="iclass" />
          </button>
          <button className="nobutton" onClick={() => Method("Product")}>
            Product <KeyboardArrowDownIcon className="iclass" />
          </button>
          <button className="nobutton" onClick={() => Method("Solutions")}>
            Solutions <KeyboardArrowDownIcon className="iclass" />
          </button>
          <button onClick={() => Method("Subscribe")} className="button1">
            Subscribe
          </button>
        </div>
      </div>
      <div className="navigation">
        {set == "resources" ? <Index1 /> : ""}
        {set1 == "Product" ? <Index2 /> : ""}
        {set2 == "Solutions" ? <Index3 /> : ""}
        {set3 == "Subscribe" ? <Index4 /> : ""}
      </div>
    </div>
  );
}
export default Index5;
