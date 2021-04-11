import React from "react";
import style from "./style.module.css"

function NeumorphismBlock() {
    let currentX;
    let currentY;

    function MoveEvent (event) {
        const element = event.target;
        element.style.left = `${event.pageX - currentX}px`;
        element.style.top = `${event.pageY - currentY}px`;
    }
    function AddMoveEvent (event) {
        const element = event.target
        currentX = event.clientX - element.getBoundingClientRect().left
        currentY = event.clientY - element.getBoundingClientRect().top
        element.addEventListener('mousemove', MoveEvent)
    }
    function RemoveMoveEvent (event) {
        const element = event.target
        element.removeEventListener('mousemove', MoveEvent)
    }

    return (
        <div
            onMouseDown={AddMoveEvent}
            onMouseUp={RemoveMoveEvent}
            className={style.neumorphism}
        />
    );
}

export default NeumorphismBlock;
