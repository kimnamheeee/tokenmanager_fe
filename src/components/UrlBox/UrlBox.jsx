import "./Index.css";
import { deleteProject } from "../../api/api";

const UrlBox = (project) => {
  const prj = project.project;
  const handleDelete = (targetId) => {
    deleteProject(targetId);
  };
  return (
    <div className="UrlBox">
      <div className="url-container">{prj.url}</div>
      <div className="delete-button" onClick={() => handleDelete(prj.id)}>
        <div className="delete-button-text">&#x2717;</div>
      </div>
    </div>
  );
};

export default UrlBox;
