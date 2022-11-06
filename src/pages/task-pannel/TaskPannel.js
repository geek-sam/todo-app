import React, { useState } from "react";
import Task from "../../component/task/Task.js";
import Input from "../../component/input/Input.js";
import Header from "../../component/header/Header.js";

function TaskPannel(props) {
  const { lists, setLists, selectedListIndex } = props;

  const [taskName, setTaskName] = useState("");
  let [selectedTask, setSelectedTask] = useState([]);

  const handleMarkDoneSelected = () => {
    // access the list of all task
    // then access the selected tasks
    setLists((prev) => {
      const temp = JSON.parse(JSON.stringify(prev));
      for (
        let index = 0;
        index < temp[selectedListIndex].todos.length;
        index++
      ) {
        if (selectedTask.includes(index))
          temp[selectedListIndex].todos[index].completed = true;
      }
      return temp;
    });
  };

  const handleDeleteSelected = () => {
    const arr = [];
    console.log(lists[selectedListIndex].todos.length);
    for (
      let index = 0;
      index < lists[selectedListIndex].todos.length;
      index++
    ) {
      const element = lists[selectedListIndex].todos[index];
      if (!selectedTask.includes(index)) arr.push({ ...element });
    }
    setSelectedTask([]);
    setLists((prev) => {
      const temp = JSON.parse(JSON.stringify(prev));
      temp[selectedListIndex].todos = arr;
      return temp;
    });
  };

  const handleSetList = (e) => {
    e.preventDefault();
    if (!taskName) return;
    setLists((prev) => {
      const temp = [...prev];
      temp[selectedListIndex].todos.push({
        id: Date.now(),
        title: taskName,
        completed: false,
      });
      return temp;
    });
    setTaskName("");
  };

  const handleCompletedTask = (index) => {
    setLists((prev) => {
      const temp = JSON.parse(JSON.stringify(prev));
      temp[selectedListIndex].todos[index].completed =
        !temp[selectedListIndex].todos[index].completed;
      return temp;
    });
  };
  const handleDeletedTask = (index) => {
    setLists((prev) => {
      const temp = JSON.parse(JSON.stringify(prev)); //deep copy
      temp[selectedListIndex].todos.splice(index, 1);
      return temp;
    });
  };

  return (
    <div className="todo-section right-box">
      <Header
        taskTotal={lists[selectedListIndex].todos.length}
        selectedTask={selectedTask}
        setLists={setLists}
        listName={
          lists.length > 0
            ? lists[selectedListIndex] && lists[selectedListIndex].name
            : ""
        } //&& -> short-circuit evaluation
        handleCompletedTask={handleCompletedTask}
        selectedListIndex={selectedListIndex}
        handleDeleteSelected={handleDeleteSelected}
        handleMarkDoneSelected={handleMarkDoneSelected}
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
              selectedTask={selectedTask}
              setSelectedTask={setSelectedTask}
              handleDeletedTask={handleDeletedTask}
              handleCompletedTask={handleCompletedTask}
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
