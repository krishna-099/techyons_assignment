import { useTranslation } from "react-i18next";
import ProjectTableRow from "../_common/projectTableRow";
import "./styles.scss";
import { projectTableData } from "./data";
import { Divider } from "@mui/material";
import TaskSlider from "../_common/taskslider";

const ProjectTable = () => {
  const { t } = useTranslation();
  return (
    <div className="project-table-container">
      <ProjectTableRow
        id={t("projectTable.id")}
        name={t("projectTable.projectName")}
        percentage={t("projectTable.%")}
        owner={t("projectTable.owner")}
        tasks={t("projectTable.tasks")}
        status={t("projectTable.status")}
        startDate={t("projectTable.startDate")}
        endDate={t("projectTable.endDate")}
        isHeader
      />
      {projectTableData.map((project) => (
        <>
          <Divider sx={{ border: "1px solid #999999",position:"relative" }} />
          <ProjectTableRow
            id={project.id}
            name={project.name}
            percentage={project.percentage}
            owner={project.owner}
            tasks={<TaskSlider task={project.task} />}
            status={project.status}
            startDate={project.startDate}
            endDate={project.endDate}
          />
        </>
      ))}
    </div>
  );
};

export default ProjectTable;
