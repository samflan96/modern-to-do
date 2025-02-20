import React, { useState } from "react";

import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  // State Management
  // longer method
  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("todo");

  // const handleTaskChange = (e) => {
  //   setTask(e.target.value);
  // };
  // console.log(task);

  // const handleStatusChange = (e) => {
  //   setStatus(e.target.value);
  // };
  // console.log(status);

  // instead we could consolidate state management
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    // console.log(tag);
    // some method returns true or false if present
    if (taskData.tags.some((item) => item === tag)) {
      // if tag is already available, it will remove it from the array
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        // must add spread operator for prev tags to be added to the array
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  // commenting for now
  // console.log(taskData.tags);

  const handleChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    // console.log(name, value);

    // prev - previous value is same as 'taskData'
    setTaskData((prev) => {
      // return all previous values using spread operator
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);

    setTasks((prev) => {
      return [...prev, taskData];
    });

    // remove tags after submit
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task} // remove task after submit is clicked
          className="task_input"
          placeholder="Enter your task"
          onChange={handleChange}
          // onChange={(e) => setTask(e.target.value)}
        />

        <div className="task_form_bottom_line">
          <div>
            {/* Props - attribute 'tagName' */}
            {/* adding another prop 'selectTag', using same name as function name */}
            <Tag
              tagName="ReactJS"
              selectTag={selectTag}
              selected={checkTag("ReactJS")}
            />
            <Tag
              tagName="NextJS"
              selectTag={selectTag}
              selected={checkTag("NextJS")}
            />
            <Tag
              tagName="NodeJS"
              selectTag={selectTag}
              selected={checkTag("NodeJS")}
            />
            <Tag
              tagName="AWS"
              selectTag={selectTag}
              selected={checkTag("AWS")}
            />
          </div>

          <div>
            <select
              name="status"
              value={taskData.status} // remove status after submit is clicked
              className="task_status"
              onChange={handleChange}
            >
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>

            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
