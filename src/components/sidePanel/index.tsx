import { SidePanelMenuIcon } from "src/svgIcons";
import "./styles.scss";

const SidePanel = () => {
  return (
    <div className="sidePanel-container">
      <div className="icon-container">
        <SidePanelMenuIcon />
      </div>
    </div>
  );
};

export default SidePanel;
