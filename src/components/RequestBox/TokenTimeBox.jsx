import "./Index.css";
import trashbin from "../../assets/images/trash-bin.png";
import pencil from "../../assets/images/pencil.png"

const TokenTimeBox = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSelectChange = (e) => {};

  return (
    <div className="TokenTimeBox">
      <div className="token-time-box">
        <div className="token-name">accss_token</div>
        <div className="token-time-button-container">
          <div className="token-duration">00:30:00</div>
          <div className="delete-icon-box">
                <img className="delete-icon" src={trashbin} width="30" />
          </div>
          <div className="token-time-update-button">
                <img className="update-icon" src={pencil} width="30" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenTimeBox;
