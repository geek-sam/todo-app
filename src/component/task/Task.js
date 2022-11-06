import React, { useState } from "react";
import { useEffect } from "react";

function Task(props) {
  const {
    forTxt,
    index,
    element,
    selectedTask,
    setSelectedTask,
    handleDeletedTask,
    handleCompletedTask,
  } = props;
  const [isSelected, setIsSelected] = useState();

  const handleSelectedTask = () => {
    setIsSelected(!isSelected);
    setSelectedTask((prev) => {
      const temp = [...prev];
      if (temp.includes(index)) {
        temp.splice(
          temp.findIndex((element) => element === index),
          1
        );
      } else {
        temp.push(index);
      }
      return temp;
    });
  };

  useEffect(() => {
    console.log(selectedTask);
  }, [selectedTask]);

  return (
    <div className={`task ${isSelected ? "selected" : ""}`}>
      <div className="task-text">
        <input
          type="checkbox"
          name={forTxt}
          id={forTxt}
          value={index}
          onChange={handleSelectedTask}
        />
        <label htmlFor={forTxt} className={element.completed ? "complete" : ""}>
          {element.title}
        </label>
      </div>
      <div className="task-controls">
        <button className="todo-btn">
          <i
            className="fa-solid fa-check"
            aria-hidden="true"
            style={{ paddingTop: 2 }}
            onClick={() => {
              handleCompletedTask(index);
            }}
          />
        </button>
        <button
          className="todo-btn"
          onClick={() => {
            handleDeletedTask(index);
          }}
        >
          <i className="fa-solid fa-trash" />
        </button>
      </div>
    </div>
  );
}

export default Task;
