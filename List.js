import React from "react";
import ListItem from "./ListItem";
function List(props) {
    console.log(props)
    const list=props.list;
    return (
        <div>
            <button onClick={() => props.deleteAll()}>Delete</button>
            {list.map(el=> {
                return <ListItem key ={el.id +'model-list'} el={el} />
            })}
        </div>
    );
}

export default List;
