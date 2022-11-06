import React from "react";

function TaskGroup(props) {
  const { listItem, onClick, isActive} = props;
  return <li 
  className={`${isActive?"active-task":null}`}
  onClick={onClick} 
  >
    {listItem}
  </li>;
}

export default TaskGroup;
