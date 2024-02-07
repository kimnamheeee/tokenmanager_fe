import "./Index.css";

const TokenBox = ({ content, tokenType }) => {
  return (
    <div className="TokenBox">
      <p className="token-type">{tokenType}</p>
      <p className="token-content-box">{content}</p>
    </div>
  );
};

export default TokenBox;
