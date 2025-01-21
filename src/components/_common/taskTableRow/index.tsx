import { Divider } from "@mui/material";
import "./styles.scss";
import { taskStatusEnum } from "src/constants/contant";

export const TaskTableRowLeft = ({ id, name, isHeader = false }) => {
  return (
    <div
      className="task-table-row-left"
      style={{ fontWeight: isHeader ? 700 : 500 }}
    >
      <div className="task-table-row__id">{id}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
      <div className="task-table-row__name">{name}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
    </div>
  );
};

export const TaskTableRowRight = ({
  team,
  owner,
  status,
  startDate,
  endDate,
  expStartDate,
  expEndDate,
  duration,
  priority,
  createdBy,
  task,
  subTask,
  completionDate,
  workHours,
  deferences,
  billingType,
  filesCount,
  lastEditedDate,
  requirementType,
  requirementId,
  associatedMembers,
  impactedDepartment,
  suntaskLastUpdated,
  reviewerDetails,
  isHeader = false,
}) => {
  const getBackgroundColor = (status) => {
    switch (status) {
      case taskStatusEnum.delayed:
        return "#F42E2E";
      case taskStatusEnum.inReview:
        return "#3B78A3";
      case taskStatusEnum.inRevision:
        return "#3E4B4F";
      case taskStatusEnum.onTrack:
        return "#CAC000";
      default:
        return "#ffffff";
    }
  };
  return (
    <div
      className="task-table-row-right"
      style={{ fontWeight: isHeader ? 700 : 500 }}
    >
      <div className="task-table-team">{team}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
      <div className="task-table-owner">{owner}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
      <div
        className="task-table-status"
        style={{ backgroundColor: getBackgroundColor(status) ,
        color: isHeader ? "#404040" : "#ffffff"
        }}
      >
        {status}
      </div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
      <div className="task-table-startDate">{startDate}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
      <div className="task-table-endDate">{endDate}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
      <div className="task-table-expStartDate">{expStartDate}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
      <div className="task-table-expEndDate">{expEndDate}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
      <div className="task-table-duration">{duration}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
      <div className="task-table-priority">{priority}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
      <div className="task-table-createdBy">{createdBy}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
      <div className="task-table-task">{task}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
      <div className="task-table-subTask">{subTask}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
      <div className="task-table-completionDate">{completionDate}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
      <div className="task-table-workHours">{workHours}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
      <div className="task-table-deferences">{deferences}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
      <div className="task-table-billingType">{billingType}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
      <div className="task-table-filesCount">{filesCount}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
      <div className="task-table-lastEditedDate">{lastEditedDate}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
      <div className="task-table-requirementType">{requirementType}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
      <div className="task-table-requirementId">{requirementId}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
      <div className="task-table-associatedMembers">{associatedMembers}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
      <div className="task-table-impactedDepartment">{impactedDepartment}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />
      <div className="task-table-suntaskLastUpdated">{suntaskLastUpdated}</div>
      <Divider
        orientation={"vertical"}
        sx={{ border: "1px solid #999999", height: "96%" }}
      />{" "}
      <div className="task-table-reviewerDetails">{reviewerDetails}</div>
    </div>
  );
};
