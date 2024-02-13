import "./Index.css";
import trashbin from "../../assets/images/trash-bin.png";
import pencil from "../../assets/images/pencil.png";
import { useState, useEffect } from "react";

const TokenTimeBox = ({ tokenTime }) => {
  console.log("tokenTime", tokenTime);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [tokenTimeDivInput, setTokenTimeDivInput] = useState({
    hour: tokenTime.timelimit.split(":")[0],
    minute: tokenTime.timelimit.split(":")[1],
    second: tokenTime.timelimit.split(":")[2],
  });

  const [tokenTimeInput, setTokenTimeInput] = useState({
    tokenname: tokenTime.tokenname,
    timelimit: "",
    project: tokenTime.project,
  });

  const handleTokenInputChange = (field, e) => {
    switch (field) {
      case "token_name":
        setTokenTimeInput({
          ...tokenTimeInput,
          tokenname: e.target.value,
        });
        break;
      case "hour":
        setTokenTimeDivInput({
          ...tokenTimeDivInput,
          hour: e.target.value,
        });
        break;
      case "minute":
        setTokenTimeDivInput({
          ...tokenTimeDivInput,
          minute: e.target.value,
        });
        break;
      case "second":
        setTokenTimeDivInput({
          ...tokenTimeDivInput,
          second: e.target.value,
        });
        break;
      default:
        break;
    }
  };

  const [isEditing, setIsEditing] = useState(false);

  const handleSelectChange = (e) => {};

  useEffect(() => {
    console.log("isEditing", isEditing);
  }, [isEditing]);

  return (
    <div>
      {isEditing ? (
        <div className="tokentime-add-container">
          <input
            className="tokentime-add-input tokenname"
            placeholder="token name"
            defaultValue={tokenTime.tokenname}
            onChange={(e) => handleTokenInputChange("token_name", e)}
          ></input>
          <div className="timeinput">
            <input
              className="tokentime-add-input time"
              placeholder="H"
              defaultValue={tokenTimeDivInput.hour}
              onChange={(e) => handleTokenInputChange("hour", e)}
            ></input>
            <div className="time-divider">:</div>
            <input
              className="tokentime-add-input time"
              placeholder="M"
              defaultValue={tokenTimeDivInput.minute}
              maxLength={2}
              onChange={(e) => handleTokenInputChange("minute", e)}
            ></input>
            <div className="time-divider">:</div>
            <input
              className="tokentime-add-input time"
              defaultValue={tokenTimeDivInput.second}
              placeholder="S"
              maxLength={2}
              onChange={(e) => handleTokenInputChange("second", e)}
            ></input>
          </div>
          <div className="tokentime-add-submit">submit</div>
          <div
            className="tokentime-add-cancel"
            onClick={() => setIsEditing(false)}
          >
            cancel
          </div>
        </div>
      ) : (
        <div className="TokenTimeBox">
          <div className="token-time-box">
            <div className="token-name">{tokenTime.tokenname}</div>
            <div className="token-time-button-container">
              <div className="token-duration">{tokenTime.timelimit}</div>
              <div className="delete-icon-box">
                <img className="delete-icon" src={trashbin} width="30" />
              </div>
              <div
                className="token-time-update-button"
                onClick={() => setIsEditing(!isEditing)}
              >
                <img className="update-icon" src={pencil} width="30" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TokenTimeBox;
