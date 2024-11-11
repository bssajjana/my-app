import React from 'react';

function Task(props) {
    return(
        <div>
            <input type="checkbox" defaultChecke={props.completed}/>

            <span>{props.text}</span>
        </div>
    );
}
export default Task;