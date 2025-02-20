import React from "react";

import "./TaskColumn.css";
import TaskCard from "./TaskCard";
import DropArea from "./DropArea";

// icon - prop name for the icons
// title - prop name for the different titles

// previous method
// const TaskColumn = (props) => {

// easier way to do object destructuring
const TaskColumn = ({
  title,
  icon,
  tasks,
  status,
  handleEdit,
  handleDelete,
  setActiveCard,
  onDrop,
}) => {
  // object destructuring
  //   const {title, icon} = props;
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        {" "}
        <img className="task_column_icon" src={icon} alt="" /> {title} (
        {tasks.filter((task) => task.status == status).length})
      </h2>

      <DropArea
        onDrop={() => {
          onDrop(status, 0);
        }}
      />

      {tasks.map(
        (task, index) =>
          task.status === status && (
            // when using 2 components
            <React.Fragment key={index}>
              <TaskCard
                title={task.task}
                tags={task.tags}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                index={index}
                setActiveCard={setActiveCard}
              />

              {/* <DropArea onDrop={onDrop} status={status} index={index + 1} /> */}
              {/* easier way to pass 3 props, using callback function*/}
              <DropArea onDrop={() => onDrop(status, index + 1)} />
            </React.Fragment>
          )
      )}
    </section>
  );
};

export default TaskColumn;
