import "./Index.css";
import { deleteProject } from "../../api/api";
import { Link } from "react-router-dom";

const UrlBox = (project) => {
  const prj = project.project;
  const handleDelete = (targetId) => {
    deleteProject(targetId);
  };
  return (
    <div className="UrlBox">
      <Link className="url-container" to={`/project/${prj.id}`}>{prj.url}</Link>
      <div className="delete-button" onClick={() => handleDelete(prj.id)}>
        <div className="delete-button-text">&#x2717;</div>
      </div>
    </div>
  );
};

export default UrlBox;
