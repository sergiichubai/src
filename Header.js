import React from "react";

function Header(props) {
    return (
        <div>
            Header123123
            {props.siteName}
            {props.version}
            {props.company}
            <hr/>
            {props.menu.map(el=><div>{el}<button>Click me</button></div>)}
        </div>
    )
}
export default  Header;