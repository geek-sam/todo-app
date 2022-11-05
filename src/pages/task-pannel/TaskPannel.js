import React, { useState } from "react";
import Task from "../../component/task/Task.js";
import Input from "../../component/input/Input.js";
import Header from "../../component/header/Header.js";

function TaskPannel(props) {
  const { lists, setLists, selectedListIndex } = props;

  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);
  let [selectedTask, setSelectedTask] = useState([]);

  const handleSetTask = (e) => {
    e.preventDefault();
    if (!taskName) return;
    setTasks((prev) => {
      const temp = [...prev];
      temp.push({
        id: Date.now(),
        title: taskName,
        completed: false,
      });
      return temp;
    });

    setTaskName("");
  };
  // console.log(tasks);

  const handleSetList = (e) => {
    e.preventDefault();
    if (!taskName) return;
    setLists((prev) => {
      const temp = [...prev];
      temp[selectedListIndex].todos.push({
        id: Date.now(),
        title: taskName,
        completed: false,
      })
      return temp
    })

    setTaskName("");
  }

  const handleSelectedTask = (index) => {
    setSelectedTask((prev) => {
      const temp = [...prev];
      if (temp.includes(index)) {
        temp.splice(temp.findIndex((element) => element === index), 1)
      }
      else {
        temp.push(index);
      }

      return temp;
    });
  }

  const handleCompletedTask = (index) => {
    setLists((prev) => {
      const temp = JSON.parse(JSON.stringify(prev));
      temp[selectedListIndex].todos[index].completed = !temp[selectedListIndex].todos[index].completed;
      return temp;
    });
  };
  const handleDeletedTask = (index) => {

    setLists((prev) => {
      const temp = JSON.parse(JSON.stringify(prev));//deep copy
      temp[selectedListIndex].todos.splice(index, 1);
      return temp;
    });
  };


  return (
    <div className="todo-section right-box">
      <Header
        taskTotal={lists[selectedListIndex].todos.length}
        selectedTask={selectedTask}
        listName={(lists.length > 0) ? lists[selectedListIndex] && lists[selectedListIndex].name : ""}
      //&& -> short-circuit evaluation
      />



      <div className="task-container">
        {lists[selectedListIndex].todos.map((element, index) => {
          return (
            <Task
              key={element.id}
              label={element.title}
              forTxt={"task-" + index}
              index={index}
              element={element}
              setSelectedTask={setSelectedTask}
              handleDeletedTask={handleDeletedTask}
              handleCompletedTask={handleCompletedTask}
              handleSelectedTask={handleSelectedTask}
            />
          );
        })}
      </div>
      <Input
        name="todo-task"
        typeTxt="text"
        placeholder={"Add work to the list"}
        classNameTxt={"new-list"}
        idName={"new-list"}
        value={taskName}
        onChange={(event) => {
          setTaskName(event.target.value);
        }}
      >
        <i
          className="plus fa-solid fa-plus"
          title="Add todo"
          onClick={handleSetList}
        />
      </Input>
    </div>
  );
}

export default TaskPannel;
