import { taskPriorityEnum } from "src/constants/contant";

export const PriorityChip = (props) => {
  const getColor = (value) => {
    switch (value) {
      case taskPriorityEnum.high:
        return "#FF0000";
      case taskPriorityEnum.medium:
        return "#FFA500";
      case taskPriorityEnum.low:
        return "#008000";
      case "None":
        return "rgb(41 174 188)";
      default:
        return "#000000";
    }
  };
  const getBackgroundColor = (value) => {
    switch (value) {
      case taskPriorityEnum.high:
        return "rgb(226 179 179)";
      case taskPriorityEnum.medium:
        return "rgb(246 216 162)";
      case taskPriorityEnum.low:
        return "rgb(154 226 154)";
      case taskPriorityEnum.none:
        return "rgb(172 200 202)";
      default:
        return "#000000";
    }
  };
  return (
    <div
      style={{
        height: "16px",
        padding: "2px 10px",
        borderRadius: 8,
        fontSize: "10px",
        fontWeight: 400,
        color: getColor(props.value),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: getBackgroundColor(props.value),
      }}
    >
      {props.value}
    </div>
  );
};
