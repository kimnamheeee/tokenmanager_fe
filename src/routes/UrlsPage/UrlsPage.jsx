import { useEffect, useState } from "react";
import "./Index.css";
import UrlBox from "../../components/UrlBox/UrlBox";
import {
  getProjectList,
  createProject,
  updateProject,
  deleteProject,
} from "../../api/api";
import Header from "../../components/Header/Header";

const UrlsPage = () => {
  const [projectList, setProjectList] = useState([]);
  const [projectMake, setProjectMake] = useState(false);
  const [project, setProject] = useState({
    url: "",
  });
  const [inputOpen, setInputOpen] = useState(false);

  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  useEffect(() => {
    const getProjectListAPI = async () => {
      const projects = await getProjectList();
      setProjectList(projects);
    };
    getProjectListAPI();
  }, []);

  const chunkedProjects = chunkArray(projectList, 2);
  console.log("chunk", chunkedProjects);

  const showInput = () => {
    setInputOpen(true);
    setProject({url:""});
  };

  const handleNewProjectChange = (e) => {
    setProject({ ...project, url: e.target.value });
  };

  const handleNewProjectSubmit = async () => {
    if (project.url) {
      const createdProject = await createProject(project);
      setProjectList([...projectList, createdProject]);
      setInputOpen(false);
    }
  };


  const closeInput = () => {
    setInputOpen(false)
  };

  return (
    <div className="UrlsPage">
      <Header />
      <h1>Select Your Project</h1>
      <div className="urls-container">
        {chunkedProjects.map((chunk, index) => (
          <div className="url-row-container" key={index}>
            {chunk.map((project) => (
              <UrlBox key={project.id} project={project} />
            ))}
          </div>
        ))}
        {inputOpen && (
            <div className="UrlInputBox">
              <input
                id="url"
                type="text"
                className="url-input-container"
                value={project.url}
                onChange={handleNewProjectChange}
                placeholder="url"
              />
              <button onClick={handleNewProjectSubmit} className="url-submit-button">Submit</button>
              <button onClick={closeInput} className="url-cancel-button">Cancel</button>
            </div>
        )}
        <div className="url-plus-button-container">
          <button className="url-plus-button" onClick={showInput}>
            <div className="url-plus-button-text">+</div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default UrlsPage;
