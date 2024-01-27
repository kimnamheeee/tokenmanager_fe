import "./Index.css";
import { useState, useEffect } from "react";
import { getProjectDetail } from "../../api/api";

const ProjectHeader = ({ project }) => {
  const [projectDetail, setProjectDetail] = useState("");

  useEffect(() => {
    const getProjectDetailAPI = async (data) => {
      const projects = await getProjectDetail(data);
      setProjectDetail(projects);
    };
    getProjectDetailAPI(project);
  }, []);

  return (
    <div className="ProjectHeader">
      <div className="project-header-box">
        <h1>{projectDetail.url}</h1>
      </div>
    </div>
  );
};

export default ProjectHeader;
