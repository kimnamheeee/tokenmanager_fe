import { useEffect, useState } from "react";
import "./Index.css";
import UrlBox from "../../components/UrlBox/UrlBox";
import { getProjectList, createProject, updateProject, deleteProject } from "../../api/api";
import Header from "../../components/Header/Header";

const UrlsPage = () => {
  const [projectList, setProjectList] = useState([]);
  const [projectMake, setProjectMake] = useState(false);
  const [project, setProject] = useState({
    url: ""
  });
  const [inputOpen, setInputOpen] = useState(false);

  useEffect(() => {
    const getProjectListAPI = async () => {
      const projects = await getProjectList();
      setProjectList(projects);

    };
    getProjectListAPI();
  }, []);

  const showInput = () => {
    setInputOpen(true);
  };

  const closeInput = () => {
    
  };



  return (
    <div className="UrlsPage">
      <Header />
      <h1>Select Your Project</h1>
      <div className="urls-container">
        <div className="url-row-container">
          {/*{setProjectList
            .map((project)=>(
              <UrlBox key={project.id} project={project}/>
            ))}*/}
          <UrlBox />
          <UrlBox />
        </div>
        <div className="url-row-container">
          <UrlBox />
          <UrlBox />
        </div>
        <div className="url-row-container">
          <UrlBox />
          <UrlBox />
        </div>
        <div className="url-row-container">
          <UrlBox />
          <UrlBox />
        </div>
        {/* <div className="url-row-container">
          <UrlBox />
          <UrlBox />
        </div> */}
        <div className="url-plus-button">
          <div className="url-plus-button-text">+</div>
        </div>
      </div>
    </div>
  );
};
export default UrlsPage;
