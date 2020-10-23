import React, { useState } from "react";

export default function School(props) {
    const [clicked, setClicked] = useState(false);

    function information() {
        if(clicked) {
            return <p>{props.description}</p>
        }
    }

    return (
        <div onClick={() => {setClicked(true)}}>
            <strong>{props.name}</strong>
            {information()}
        </div>
    );
}
