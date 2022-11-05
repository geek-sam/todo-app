import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import ListPannel from "./pages/list-pannel/ListPannel.js";
import TaskPannel from "./pages/task-pannel/TaskPannel";
import NotSelected from "./component/NotSelected";

function App() {
  const [lists, setLists] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selectedListIndex, setSelectedListIndex] = useState();
  // useEffect(() => {
  //   console.log(lists);
  // }, [lists]);
  // const fetchUsers = () => {
  //   fetch('https://reqres.in/api/users?page=2')
  //     .then((response) => response.json())
  //     .then((data) => console.log(data.data[2]));
  // }

  // useEffect(() => {
  //   fetchUsers();
  // }, [])



  // useEffect(() => {
  //   console.log("useEffect Called", lists);
  // }, [lists]);

  // useEffect(() => {
  //   console.log("useEffect Called", selectedListIndex);
  // }, [selectedListIndex]);

  return (
    <div className="main-container">
      <ListPannel
        lists={lists}
        tasks={tasks}
        setLists={setLists}
        selectedListIndex={selectedListIndex}
        setSelectedListIndex={setSelectedListIndex}
      />
      {selectedListIndex == null ? (
        <NotSelected />
      ) : (
        <TaskPannel
          lists={lists}
          tasks={tasks}
          setLists={setLists}
          setTasks={setTasks}
          selectedListIndex={selectedListIndex}
        />
      )}
    </div>
  );
}

export default App;

// use of react useEffect Hook without using the dependency array
// use of react useEffect Hook using empty dependency array []
// use of react useEffect Hook with a dependency in dependency array [dependencyName]
