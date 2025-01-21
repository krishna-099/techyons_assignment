import { Divider } from "@mui/material";
import "./styles.scss";
import { projectStatusEnum } from "src/constants/contant";

const ProjectTableRow = ({
  id,
  name,
  percentage,
  owner,
  tasks,
  status,
  startDate,
  endDate,
  isHeader=false
}) => {
  const  getBackgroundColor = (status) => {
    switch (status) {
        case projectStatusEnum.notStarted:
            return "#B0B0B0";
        case projectStatusEnum.inProgress:
            return "#4A90E2";
        case projectStatusEnum.completed:
            return "#4CAF50";
        case projectStatusEnum.archived:
            return "#607D8B";
        default:
            return "#ffffff";
    }
  }
  return (
    <div className="project-table-row" style={{fontWeight:isHeader?700:500}}>
      <div className="project-table-row__id">{id}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
      <div className="project-table-row__name">{name}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
      <div className="project-table-row__per">{percentage}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
      <div className="project-table-row__owner">{owner}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
      <div className="project-table-row__task">{tasks}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
      <div className="project-table-row__status" style={{backgroundColor:getBackgroundColor(status)}}>{status}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
      <div className="project-table-row__startDate">{startDate}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
      <div className="project-table-row__endDate">{endDate}</div>
    </div>
  );
};

export default ProjectTableRow;
