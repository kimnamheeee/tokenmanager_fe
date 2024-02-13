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
  const [requestIds, setRequestIds] = useState([]);
  const [tokenTypeOptions, setTokenTypeOptions] = useState([]);
  const { projectId } = useParams();
  const [project, setProject] = useState({
    project: projectId,
  });
  const [requestInput, setRequestInput] = useState({
    type: "",
    spec_url: "",
    project: projectId,
  });
  const [tokenInput, setTokenInput] = useState({
    token_name: "",
    content: "",
    request: 0,
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

  const handleAddRequest = async (data) => {
    if (window.confirm("등록하시겠습니까?")) {
      const request = await createRequest(data);
      setRequestList([...requestList, request]);
      setRequestInput({
        type: "",
        spec_url: "",
        project: projectId,
      });
      if (request) {
        const requestId = request.id;
        const token = await createToken({ ...tokenInput, request: requestId });
        setTokenList([...tokenList, token]);
        setTokenInput({
          token_name: "",
          content: "",
          request: 0,
        });
      }
    } else {
      setRequestInput({
        type: "",
        spec_url: "",
        project: projectId,
      });
    }
  };

  const typeOptions = [
    { value: "GET", label: "GET" },
    { value: "POST", label: "POST" },
    { value: "PUT", label: "PUT" },
    { value: "DELETE", label: "DELETE" },
    { value: "PATCH", label: "PATCH" },
  ];

  useEffect(() => {
    //projectId를 쿼리 파라미터로 getTokenTimeList에 전달
    const fetchTokenTimeList = async (data) => {
      const tokenTimeList = await getTokenTimeList(data);
      setTokenTimeList(tokenTimeList);
    };
    fetchTokenTimeList(project);
  }, []);

  useEffect(() => {
    const tokenTypes = tokenTimeList.map((tokenTime) => {
      return {
        value: tokenTime.tokenname,
        label: tokenTime.tokenname,
      };
    });
    setTokenTypeOptions(tokenTypes);
  }, [tokenTimeList]);

  useEffect(() => {
    //projectId를 쿼리 파라미터로 getRequestList에 전달
    const fetchRequestList = async (data) => {
      // console.log("FETCHING REQUEST LIST");
      const res = await getRequestList(data);
      // console.log("FETCHED REQUEST LIST", res);
      if (res.length !== 0) {
        // console.log("SETTING INITIALIZED", res);
        setRequestList(res);
      }
    };
    fetchRequestList(project);
  }, []);

  useEffect(() => {
    if (requestList.length !== 0) {
      const requestIds = requestList.map((request) => request.id);
      setRequestIds(requestIds);
    }
  }, [requestList]);

  useEffect(() => {
    //requestIds를 순회하며 쿼리 파라미터로 getTokenList에 전달
    const fetchTokenList = async (data) => {
      const tokenArray = await getTokenList(data);
      const token = tokenArray[0];
      if (token) {
        setTokenList((prevTokenList) => {
          // 이전 토큰 리스트에서 이미 있는 토큰인지 확인
          if (
            !prevTokenList.find((existingToken) => existingToken.id === token.id)
          ) {
            // 중복되지 않는 경우 새로운 토큰 추가
            return [...prevTokenList, token];
          } else {
            // 이미 존재하는 토큰인 경우 이전 상태 그대로 반환
            return prevTokenList;
          }
        });
      }
    };
    // requestIds를 이용하여 토큰 리스트 가져오기
    requestIds.forEach((requestId) => fetchTokenList({ request: requestId }));
  }, [requestIds]);

  const [isAdding, setIsAdding] = useState(false);
  const [isAddingToken, setIsAddingToken] = useState(false);

  //tokentimeAddButton 클릭시 isAdding state를 true로 변경
  const handleAddButtonClick = () => {
    setIsAdding(true);
  };

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
                <RequestBox
                  requestId = {request.id}
                  type={request.type}
                  specUrl={request.spec_url}
                  token={tokenList.find(
                    (token) => token.request === request.id
                  )}
                />
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
                          <img
                            src={check}
                            width="20"
                            onClick={() => {
                              handleAddRequest(requestInput);
                            }}
                          />
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
        <div className="expired-token-container">
          <div className="request-container-box">
            <div className="request-container-box-button">expired</div>
            <div className="rqbox-container">{/* <RequestBox /> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestsPage;
