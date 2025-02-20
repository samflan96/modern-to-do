import React, { useState, useEffect, use, act } from "react";

import "./App.css";
import TaskForm from "../components/TaskForm";
import TaskColumn from "../components/TaskColumn";

import todoIcon from "../assets/todo.png";
import doingIcon from "../assets/doing.png";
import doneIcon from "../assets/done.png";

// icon - prop name for the icons
// title - prop name for the different titles
const oldTasks = localStorage.getItem("tasks");
// console.log(oldTasks);

const App = () => {
  // to not lose our tasks when refresh the page
  // || [] - in case we delete file from our local storage, to prevent error
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  // const [tasks, setTasks] = useState([]);

  // make task cards draggable
  const [activeCard, setActiveCard] = useState(null);

  // takes 2 arguments
  // 1. callback function - where we write side effect logic - execute when something change in the component
  // 2. dependencies - array of variables, optional argument
  // what to run, when to run
  // local storage stores string data - best to convert data to a string
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  const handleEdit = (taskIndex) => {
    const editedTask = tasks.map((task) =>
      task.index === taskIndex ? { ...task, isEditing: !task.isEditing } : task
    );
    setTasks(editedTask);
  };

  // console.log("tasks:", tasks);

  const onDrop = (status, position) => {
    console.log(
      `${activeCard} is going to place into ${status} and at the position ${position}`
    );

    if (activeCard === null || activeCard === undefined) return;

    const taskToMove = tasks[activeCard];
    const updatedTasks = tasks.filter((task, index) => index !== activeCard);

    updatedTasks.splice(position, 0, {
      ...taskToMove,
      status: status,
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="To do"
          icon={todoIcon}
          tasks={tasks}
          status="todo"
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="Doing"
          icon={doingIcon}
          tasks={tasks}
          status="doing"
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="Done"
          icon={doneIcon}
          tasks={tasks}
          status="done"
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
      </main>

      {/* shows index of card we're dragging */}
      {/* <h1>Active Card - {activeCard}</h1> */}
    </div>
  );
};

export default App;
