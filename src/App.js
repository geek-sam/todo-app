import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import ListPannel from "./pages/list-pannel/ListPannel.js";
import TaskPannel from "./pages/task-pannel/TaskPannel";
import NotSelected from "./component/NotSelected";
const storageAccessKey = "todos"
function App() {
  const [lists, setLists] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selectedListIndex, setSelectedListIndex] = useState();
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    if (lists.length > 0)
      localStorage.setItem(storageAccessKey, JSON.stringify(lists));
  }, [lists])

  useEffect(() => {
    setLists(JSON.parse(localStorage.getItem(storageAccessKey)));
  }, [])


  return (
    <div className="main-container">
      <ListPannel
        lists={lists}
        setLists={setLists}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
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
