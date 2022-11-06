import React from "react";

function Header(props) {
  const { taskTotal, listName, handleDeleteSelected, handleMarkDoneSelected } =
    props;

  return (
    <div className="header">
      <h1 className="task-title">{listName}</h1>
      <p className="remain">Total "{taskTotal}" works</p>
      <div className="controls">
        <i
          className="fa-solid fa-check"
          title="mark selected done"
          onClick={handleMarkDoneSelected}
        />
        <i
          className="fa-solid fa-trash"
          title="delete selected"
          onClick={handleDeleteSelected}
        />
        {/* <i className="fa-solid fa-share" title='share todo'/> */}
        <i className="fa-solid fa-bars" title="Menu" />
      </div>
    </div>
  );
}

export default Header;
