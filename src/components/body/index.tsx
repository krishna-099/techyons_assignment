import { useTranslation } from "react-i18next";
import "./styles.scss";
import ProjectButton from "./projectButton";
import ProjectTable from "../projectTable";
import TaskTable from "../taskTable";
import TaskHeader from "../_common/taskHeader";
const Body = () => {
  const { t } = useTranslation();
  return (
    <div className="body-container">
      <div className="body-header">
        <div className="body-header-left">
          <span className="body-header-title"> {t("body.bodyTitle")}</span>
          <ProjectButton />
        </div>
        <div className="body-header-right">
          <span className="body-header-title-dash">
            {" "}
            {t("body.dashboard")}&nbsp;
          </span>
          <span className="body-header-title-proj">
            {" "}
            {t("body.projectOverView")}
          </span>
        </div>
      </div>
      <div className="body-content">
        <div className="body-project-part">
          <div className="project-header-container">
            <TaskHeader title={t("taskHeader.projectHeaderTitle")}/>
          </div>

          <ProjectTable />
        </div>
        <div className="body-task-part">
          <div className="task-header-container">
            <TaskHeader title={t("taskHeader.taskHeaderTitle")} />
          </div>

          <TaskTable />
        </div>
      </div>
    </div>
  );
};

export default Body;
