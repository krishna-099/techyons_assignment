import { useTranslation } from "react-i18next";
import { ProjectButtonPlusIcon } from "src/svgIcons";
import "./projectButton.styles.scss";
const ProjectButton = () => {
  const { t } = useTranslation();
  return (
    <div className="project-button-container">
      <ProjectButtonPlusIcon />
      <span className="project-button-content"> {t("body.bodyTitle")}</span>
    </div>
  );
};

export default ProjectButton;
