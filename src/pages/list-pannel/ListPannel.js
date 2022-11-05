import React, { useState } from "react";
import Input from "../../component/input/Input.js";
import Search from "../../component/search/Search.js";
import TaskGroup from "../../component/taskGroup/TaskGroup.js";
const completeWork = ["Homework", "Gym", "Marketing"];

function ListPannel(props) {
  const {lists, setLists, setSelectedListIndex} = props

  const [listName, setListName] = useState("");

  const handleSetList = (e) => {
    e.preventDefault();
    
    if (!listName) return;
    setLists((prev) => {
      const temp = [...prev];
      temp.push({
        id: Date.now(),
        name: listName,
        todos: [],
      });
      return temp;
    });
    setListName("");
  };
  return (
    <div className="my-list left-box">
      <h1 className="heading">List your tasks here...</h1>
      <h2 className="list-title">My List</h2>
      <Search placeholderTxt={"Search task"}>
        <i className="search-ico fa-solid fa-magnifying-glass" />
      </Search>
      <ul className="task-list">
        <h4>Tasks</h4>
        <hr />
        {lists.map((element, index) => {
          return <TaskGroup key={index} listItem={element.name} onClick = {()=>{setSelectedListIndex(index)}}/>;
        })}

        {/* <li className="active-task">Task1</li> */}
      </ul>
      <ul className="task-list">
        <h4>Completed</h4>
        <hr />
        {completeWork.map((element, index) => {
          return <TaskGroup key={index} listItem={element} />;
        })}
      </ul>
      <Input
        placeholder={"Enter new task.."}
        classNameTxt={"new-list"}
        typeTxt={"text"}
        idName={"new-list"}
        name="todo-list"
        value={listName}
        onChange={(event) => {
          setListName(event.target.value);
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

export default ListPannel;
