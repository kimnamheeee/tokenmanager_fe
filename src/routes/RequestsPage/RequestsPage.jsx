import "./Index.css";
import { useState, useEffect } from "react";

import ProjectHeader from "../../components/RequestBox/ProjectHeader";
import TokenTimeBox from "../../components/RequestBox/TokenTimeBox";
import RequestBox from "../../components/RequestBox/RequestBox";
import TokenTimeAddButton from "../../components/RequestBox/TokenTimeAddButton";
import { getTokenTimeList } from "../../api/api";

const RequestsPage = () => {
  // const [tokenTimeList, setTokenTimeList] = useState([]);

  // useEffect(() => {
  //   const fetchTokenTimeList = async () => {
  //     const tokenTimeList = await getTokenTimeList();
  //     setTokenTimeList(tokenTimeList);
  //   };
  //   fetchTokenTimeList();
  // }, []);

  // useEffect(() => {
  //   console.log(tokenTimeList);
  // }, [tokenTimeList]);

  const [isAdding, setIsAdding] = useState(false);

  //tokentimeAddButton 클릭시 isAdding state를 true로 변경
  const handleAddButtonClick = () => {
    setIsAdding(true);
  };

  useEffect(() => {
    console.log(isAdding);
  }, [isAdding]);

  return (
    <div className="RequestsPage">
      <div className="request-page-header">
        <ProjectHeader />
        <div className="token-time-container">
          <TokenTimeBox />
          {isAdding ? (
            <div className="tokentime-add-container">
              <input
                className="tokentime-add-input tokenname"
                placeholder="token name"
              ></input>
              <div className="timeinput">
                <input
                  className="tokentime-add-input time"
                  placeholder="H"
                ></input>
                <div className="time-divider">:</div>
                <input
                  className="tokentime-add-input time"
                  placeholder="M"
                  maxLength={2}
                ></input>
                <div className="time-divider">:</div>
                <input
                  className="tokentime-add-input time"
                  placeholder="S"
                  maxLength={2}
                ></input>
              </div>
              <div className="tokentime-add-submit">submit</div>
              <div
                className="tokentime-add-cancel"
                onClick={() => setIsAdding(false)}
              >
                cancel
              </div>
            </div>
          ) : (
            <div onClick={handleAddButtonClick}>
              <TokenTimeAddButton onClick={handleAddButtonClick} />
            </div>
          )}
        </div>
      </div>
      <div className="request-container">
        <div className="request-container-box">
          <div className="request-container-box-button">available</div>
          {/* <br></br> */}

          <div className="rqbox-container">
            <RequestBox />
          </div>
        </div>

        <div className="request-container-box">
          <div className="request-container-box-button">expired</div>
          {/* <br></br> */}

          <div className="rqbox-container">
            <RequestBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestsPage;
