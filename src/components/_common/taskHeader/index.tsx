import {
  FilterIcon,
  GridViewIcon,
  ListViewIcon,
  MoreIcon,
  VectorIcon,
} from "src/svgIcons";
import "./styles.scss";

const TaskHeader = (props) => {
  return (
    <div className="header-container-task-project">
      <div className="header-container-task-project-left">
        <span className="header-container-task-project-title">
          {props.title}
        </span>
        <VectorIcon />
      </div>

      <div className="header-container-task-project-right">
        <div className="icon-button-container">
          <ListViewIcon />
        </div>
        <div className="icon-button-container">
          <GridViewIcon />
        </div>
        <div className="icon-button-container">
          <FilterIcon />
        </div>
        <div className="icon-button-container">
          <MoreIcon />
        </div>
      </div>
    </div>
  );
};

export default TaskHeader;
