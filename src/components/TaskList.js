import React from "react";
import Task from "./Task";

function TaskList({ tasks, onRemoveTask }) {
  const taskList = tasks.map((task) => (
    <Task
      key={task.text}
      text={task.text}
      category={task.category}
      onRemoveTask={onRemoveTask}
    />
  ));
  return <div className="tasks">{taskList}</div>;
}

export default TaskList;
