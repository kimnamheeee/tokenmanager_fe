import "./Index.css";
import { useState, useEffect } from "react";

import ProjectHeader from "../../components/RequestBox/ProjectHeader";
import TokenTimeBox from "../../components/RequestBox/TokenTimeBox";
import RequestBox from "../../components/RequestBox/RequestBox";
import TokenTimeAddButton from "../../components/RequestBox/TokenTimeAddButton";
import { getTokenTimeList } from "../../api/api";
import { useParams } from "react-router-dom";

const RequestsPage = () => {
  const [tokenTimeList, setTokenTimeList] = useState([]);
  const { projectId } = useParams();
  const [project, setProject] = useState({
    project: projectId,
  });

  useEffect(() => {
    console.log("project we are sending", projectId);

    //projectId를 쿼리 파라미터로 getTokenTimeList에 전달
    const fetchTokenTimeList = async (data) => {
      const tokenTimeList = await getTokenTimeList(data);
      setTokenTimeList(tokenTimeList);
    };
    fetchTokenTimeList(project);
  }, []);

  // useEffect(() => {
  //   console.log(tokenTimeList);
  // }, [tokenTimeList]);

  const [isAdding, setIsAdding] = useState(false);
  const [isAddingToken, setIsAddingToken] = useState(false);

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
        <ProjectHeader project={projectId} />
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
        <div className="available-token-container">
          <div className="request-container-box">
            <div className="request-container-box-button">available</div>
            <div className="rqbox-container">
              <RequestBox />
            </div>
          </div>
          <div className="request-plus-button">+</div>
        </div>

        <div className="request-container-box">
          <div className="request-container-box-button">expired</div>
          <div className="rqbox-container">
            <RequestBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestsPage;
