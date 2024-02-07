import "./Index.css";

import TypeBox from "../RequestBox/TypeBox";
import SpecUrlBox from "./SpecUrlBox";
import Timer from "./Timer";
import TokenBox from "./TokenBox";
import trashbin from "../../assets/images/trash-bin.png";

const RequestBox = ({ type, specUrl }) => {
  return (
    <div className="RequestBox">
      <div className="requestbox-container">
        <div className="requestbox-content">
          <div className="requestbox-type-specUrl">
            <TypeBox type={type} />
            <SpecUrlBox specUrl={specUrl} />
            <Timer />
            <div className="delete-icon-box">
              <img className="delete-icon" src={trashbin} width="30" />
            </div>
          </div>
          <div className="requestbox-token">
            <TokenBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestBox;
