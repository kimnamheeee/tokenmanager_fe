import "./Index.css";
import { useEffect } from "react";
import TypeBox from "../RequestBox/TypeBox";
import SpecUrlBox from "./SpecUrlBox";
import Timer from "./Timer";
import TokenBox from "./TokenBox";
import trashbin from "../../assets/images/trash-bin.png";
import { deleteRequest } from "../../api/api";

const RequestBox = ({
  requestId,
  type,
  specUrl,
  token,
  remainingTime,
  initialRemainingTime,
}) => {
  const handleDelete = (targetId) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      deleteRequest(targetId);
    } else {
      return;
    }
  };

  return (
    <div className="RequestBox">
      <div className="requestbox-container">
        <div className="requestbox-content">
          <div className="requestbox-type-specUrl">
            <TypeBox type={type} />
            <SpecUrlBox specUrl={specUrl} />
            <Timer
              remainingTime={remainingTime}
              initialRemainingTime={initialRemainingTime}
            />
            <div
              className="delete-icon-box"
              onClick={() => handleDelete(requestId)}
            >
              <img className="delete-icon" src={trashbin} width="30" />
            </div>
          </div>
          <div className="requestbox-token">
            {token ? (
              <TokenBox content={token.content} tokenType={token.token_name} />
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestBox;
