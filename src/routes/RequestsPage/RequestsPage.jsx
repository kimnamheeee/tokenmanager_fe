import "./Index.css";
import { useState, useEffect } from "react";
import Select from "react-select";

import ProjectHeader from "../../components/RequestBox/ProjectHeader";
import TokenTimeBox from "../../components/RequestBox/TokenTimeBox";
import RequestBox from "../../components/RequestBox/RequestBox";
import TokenTimeAddButton from "../../components/RequestBox/TokenTimeAddButton";
import {
  getTokenTimeList,
  getRequestList,
  getTokenList,
  createRequest,
  createToken,
} from "../../api/api";
import { useParams } from "react-router-dom";

import cancel from "../../assets/images/cancel.svg";
import check from "../../assets/images/check.svg";

const RequestsPage = () => {
  const [tokenTimeList, setTokenTimeList] = useState([]);
  const [requestList, setRequestList] = useState([]);
  const [tokenList, setTokenList] = useState([]);
  const { projectId } = useParams();
  const [project, setProject] = useState({
    project: projectId,
  });
  const [requestInput, setRequestInput] = useState({
    type: "",
    spec_url: "",
    project_id: projectId,
  });
  const [tokenInput, setTokenInput] = useState({
    token_name: "",
    content: "",
    request_id: 0,
  });

  const handleRequestInput = (e) => {
    const { id, value } = e.target;
    setRequestInput({
      ...requestInput,
      [id]: value,
    });
  };

  const handleTokenContentInput = (e) => {
    const { id, value } = e.target;
    setTokenInput({
      ...tokenInput,
      [id]: value,
    });
  };

  const handleTypeOptionChange = (selectedOption) => {
    setRequestInput({
      ...requestInput,
      type: selectedOption.value,
    });
  };

  const handleTokenTypeOptionChange = (selectedOption) => {
    setTokenInput({
      ...tokenInput,
      token_name: selectedOption.value,
    });
  };

  const typeOptions = [
    { value: "GET", label: "GET" },
    { value: "POST", label: "POST" },
    { value: "PUT", label: "PUT" },
    { value: "DELETE", label: "DELETE" },
    { value: "PATCH", label: "PATCH" },
  ];

  const tokenTypeOptions = [
    { value: "access_token", label: "access_token" },
    { value: "refresh_token", label: "refresh_token" },
  ];

  useEffect(() => {
    //projectId를 쿼리 파라미터로 getTokenTimeList에 전달
    const fetchTokenTimeList = async (data) => {
      const tokenTimeList = await getTokenTimeList(data);
      setTokenTimeList(tokenTimeList);
    };
    fetchTokenTimeList(project);
  }, []);

  // useEffect(() => {
  //   console.log("project we are sending", projectId);

  //   //projectId를 쿼리 파라미터로 getRequestList에 전달
  //   const fetchRequestList = async (data) => {
  //     const requestList = await getRequestList(data);
  //     setRequestList(requestList);
  //   };
  //   fetchRequestList(project);
  // }, []);

  useEffect(() => {
    // console.log("project we are sending", projectId);

    //projectId를 쿼리 파라미터로 getRequestList에 전달
    const fetchRequestList = async (data) => {
      const requestList = await getRequestList(data);

      // requestList.map(async (id)=> {
      //   const tokenList = await getTokenList(id);
      //   setTokenList(tokenList);
      // })
      setRequestList(requestList);
    };
    fetchRequestList(project);
  }, []);

  useEffect(() => {
    const fetchTokenList = async (data) => {
      const tokenList = await getTokenList(data);
      setTokenList(tokenList);
    };
  }, []);

  const [isAdding, setIsAdding] = useState(false);
  const [isAddingToken, setIsAddingToken] = useState(false);

  //tokentimeAddButton 클릭시 isAdding state를 true로 변경
  const handleAddButtonClick = () => {
    setIsAdding(true);
  };

  useEffect(() => {
    console.log("Input", requestInput);
  }, [requestInput]);

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
              {requestList.map((request) => (
                <RequestBox type={request.type} specUrl={request.spec_url} />
              ))}
              {isAddingToken ? (
                <div className="rqbox-container">
                  <div className="rqbox-wrap">
                    <div className="rqbox-input">
                      <div className="input-type-and-url">
                        <div className="requesttype-select">
                          <Select
                            options={typeOptions}
                            onChange={handleTypeOptionChange}
                          />
                        </div>
                        <input
                          className="specurl-input"
                          placeholder="specific request url"
                          id="spec_url"
                          value={requestInput.spec_url}
                          onChange={handleRequestInput}
                        ></input>
                        <div className="rqbox-input-confirm">
                          <img src={check} width="20" />
                        </div>
                        <div className="rqbox-input-cancel">
                          <img
                            src={cancel}
                            width="20"
                            onClick={() => setIsAddingToken(false)}
                          />
                        </div>
                      </div>
                      <div className="token-type-option">
                        <Select
                          options={tokenTypeOptions}
                          onChange={handleTokenTypeOptionChange}
                        />
                      </div>
                      <textarea
                        className="rqbox-input-tokencontent"
                        placeholder="token content"
                        id="content"
                        onChange={handleTokenContentInput}
                      ></textarea>
                    </div>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          {isAddingToken ? (
            <div></div>
          ) : (
            <div
              className="request-plus-button"
              onClick={() => {
                setIsAddingToken(true);
              }}
            >
              +
            </div>
          )}
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
