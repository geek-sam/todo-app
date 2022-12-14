import React from "react";

function input(props) {
  const { children, classNameTxt, typeTxt, idName, ...rest } = props;
  return (
    <form className="input-field" action="">
      <input
        type={typeTxt}
        id={idName}
        className={classNameTxt}
        autoComplete="off"
        {...rest}
      />
      {children}
    </form>
  );
}

export default input;
