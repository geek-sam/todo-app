import React from "react";

function Header(props) {
  const { index, taskTotal, listName, selectedTask, setSelectedTask, handleCompleted } = props;

  return (
    <div className="header">
      <h1 className="task-title">{listName}</h1>
      <p className="remain">Total "{taskTotal}" works</p>
      <div className="controls">
        <i 
            className="fa-solid fa-check" 
            title="mark selected done" 
            onClick={handleCompleted}
        />
        <i
          className="fa-solid fa-trash"
          title="delete selected"
        />
        {/* <i className="fa-solid fa-share" title='share todo'/> */}
        <i className="fa-solid fa-bars" title="Menu" />
      </div>
    </div>
  );
}

export default Header;
