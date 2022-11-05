import React, { useState } from "react";
import { useEffect } from "react";

function Task(props) {
  const { forTxt, index, element, setSelectedTask, handleDeletedTask, handleCompletedTask, handleSelectedTask} =
    props;
  const [isSelected, setIsSelected] = useState();

  // const handleSelected = (event) => {
  //   console.log(index)
  //   setIsSelected(!isSelected);
  //   const val = event.target.value
  //   if(isSelected){
  //     setSelectedTask((prev) => {
  //       const temp = [...prev];
  //       temp.push(index);
  //       // console.log(temp);
  //       return temp;
  //     });
  //   }
  //   else{
  //     console.log(selectedTask)
  //     setSelectedTask(selectedTask.filter((e) => {
  //       return (e !== val)
  //     }));
  //   }
  // };

  
  // useEffect(()=>{
  //   console.log(selectedTask)
  // },[selectedTask])

  
  return (
    <div className={`task ${isSelected ? "selected" : ""}`}>
      <div className="task-text">
        <input
          type="checkbox"
          name={forTxt}
          id={forTxt}
          value={index}
          onChange={()=>{handleSelectedTask(index)}}
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
            onClick={()=>{handleCompletedTask(index) }}
          />
        </button>
        {/* <button className="todo-btn" >
          <i className="fa-solid fa-pen-to-square" />
        </button> */}
        <button className="todo-btn" onClick={()=>{handleDeletedTask(index)}}>
          <i className="fa-solid fa-trash" />
        </button>
      </div>
    </div>
  );
}

export default Task;
