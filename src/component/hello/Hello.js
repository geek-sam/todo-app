import React from "react";
function Hello (props) {
    const {children, greetingText}=props;
    return(
        <div>
            <h2> {greetingText} World!</h2>{children}
        </div>
    )
}

export default Hello
