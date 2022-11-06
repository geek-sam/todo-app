import React from "react";
import list from "./../img/list.png";

function NotSelected() {
  return (
    <div className="not-selected">
      <img src={list} alt="" />
      <h1>No List is selected</h1><br />
      <p>Select a list from the lists menu<br /><b>or</b><br />add a new task group then select it.
      </p>
      <p>Illustration Credit: <a href="https://icons8.com/illustrations" target="_blank" rel="noreferrer">icons8</a></p>
    </div>
  );
}

export default NotSelected;
