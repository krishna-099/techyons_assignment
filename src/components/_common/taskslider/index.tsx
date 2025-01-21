const TaskSlider = (props) => {
  const fillPercentage = Math.floor(
    (props.task.completed / props.task.total) * 100
  );
  return (
    <>
    {!props.hide && props.task.completed}
    <div
      style={{
        height: "16px",
        width: "70%",
        borderRadius: 8,
        background: `linear-gradient(to right, #2ecc71 ${fillPercentage}%, #F1F1F1 ${fillPercentage}%)`,
        fontSize: "11px",
        fontWeight: 400,
        color: "#171717",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        {`${fillPercentage}%`}
    </div>
    {!props.hide && props.task.total}
    </>
  );
};

export default TaskSlider;
