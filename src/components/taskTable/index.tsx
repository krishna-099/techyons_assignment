import { useTranslation } from "react-i18next";
import "./styles.scss";
import { taskTableData } from "./data";
import { Divider } from "@mui/material";
import TaskSlider from "../_common/taskslider";
import { TaskTableRowLeft, TaskTableRowRight } from "../_common/taskTableRow";
import { PriorityChip } from "../_common/priorityChip";

const TaskTable = () => {
  const { t } = useTranslation();
  return (
    <div className="task-table-container">
      <div className="task-table-header">
        <TaskTableRowLeft
          id={t("taskTable.id")}
          name={t("taskTable.taskName")}
          isHeader
        />
        {taskTableData.map((task) => (
          <>
            <Divider
              sx={{ border: "1px solid #999999", position: "relative" }}
            />
            <TaskTableRowLeft id={task.id} name={task.name} isHeader />
          </>
        ))}
      </div>
      <div className="task-table-content">
        <TaskTableRowRight
          team={t("taskTable.team")}
          owner={t("taskTable.owner")}
          status={t("taskTable.status")}
          startDate={t("taskTable.startDate")}
          endDate={t("taskTable.endDate")}
          expStartDate={t("taskTable.expStartDate")}
          expEndDate={t("taskTable.expEndDate")}
          duration={t("taskTable.duration")}
          priority={t("taskTable.priority")}
          createdBy={t("taskTable.createdBy")}
          task={t("taskTable.percentTaskCompleted")}
          subTask={t("taskTable.percentSubTaskCompleted")}
          completionDate={t("taskTable.completionDate")}
          workHours={t("taskTable.workHours")}
          deferences={t("taskTable.deference")}
          billingType={t("taskTable.billingTypes")}
          filesCount={t("taskTable.filesCount")}
          lastEditedDate={t("taskTable.lastEditedDate")}
          requirementType={t("taskTable.requirementType")}
          requirementId={t("taskTable.requirementId")}
          associatedMembers={t("taskTable.associatedMembers")}
          impactedDepartment={t("taskTable.impactedDept")}
          suntaskLastUpdated={t("taskTable.subtaskLastEditedDate")}
          reviewerDetails={t("taskTable.reviewerDetails")}
          isHeader
        />
        {taskTableData.map((task) => (
          <>
            <Divider
              sx={{
                border: "1px solid #999999",
                position: "relative",
                width: "295%",
              }}
            />
            <TaskTableRowRight
              team={task.team}
              owner={task.owner}
              status={task.status}
              startDate={task.startDate}
              endDate={task.endDate}
              expStartDate={task.expStartDate}
              expEndDate={task.expEndDate}
              duration={task.duration}
              priority={<PriorityChip value={task.priority} />}
              createdBy={task.createdBy}
              task={<TaskSlider task={task.task} hide />}
              subTask={<TaskSlider task={task.task} hide />}
              completionDate={task.completionDate}
              workHours={task.workHours}
              deferences={task.deferences}
              billingType={task.billingType}
              filesCount={task.filesCount}
              lastEditedDate={task.lastEditedDate}
              requirementType={task.requirementType}
              requirementId={task.requirementId}
              associatedMembers={task.associatedMembers}
              impactedDepartment={task.impactedDepartment}
              suntaskLastUpdated={task.suntaskLastUpdated}
              reviewerDetails={task.reviewerDetails}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default TaskTable;
