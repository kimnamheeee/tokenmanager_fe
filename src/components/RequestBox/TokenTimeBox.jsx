import "./Index.css";

const TokenTimeBox = ({ tokenTime }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSelectChange = (e) => {};

  return (
    <div className="TokenTimeBox">
      <div className="token-time-box">
        <div className="token-name">{tokenTime.tokenname}</div>
        <div className="token-duration">{tokenTime.timelimit}</div>
      </div>
    </div>
  );
};

export default TokenTimeBox;
