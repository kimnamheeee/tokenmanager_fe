import "./Index.css";

const TokenTimeBox = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  const handleSelectChange = (e) => {
    
  };

  return (
    <div className="token-time-box">
      <form onSubmit={handleSubmit} className="token-time-form">
        <input type="text" className="token-time-input" placeholder="Enter token time" />
        <div className="token-time-divider"></div>
        <select className="token-time-select" onChange={handleSelectChange}>
          {/* dummy */}
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          {/* dummy */}
        </select>
      </form>
    </div>
  );
};

export default TokenTimeBox;
