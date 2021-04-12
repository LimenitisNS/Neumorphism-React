import React, { useRef } from "react";
import style from "./style.module.css";

function NeumorphismBlock() {
    const block = useRef(null);
    let currentX;
    let currentY;

    function MoveEvent (event) {
        setTimeout(() => {
            block.current.style.left = `${event.pageX - currentX}px`;
            block.current.style.top = `${event.pageY - currentY}px`;
        }, 300)
    }
    function AddMoveEvent (event) {
        const element = event.target;
        currentX = event.clientX - element.getBoundingClientRect().left;
        currentY = event.clientY - element.getBoundingClientRect().top;
        document.addEventListener('mousemove', MoveEvent);
        document.addEventListener('mouseup', RemoveMoveEvent);
    }
    function RemoveMoveEvent () {
        document.removeEventListener('mousemove', MoveEvent);
        document.removeEventListener('mouseup', RemoveMoveEvent);
    }

    return (
        <div
            ref={block}
            onMouseUp={RemoveMoveEvent}
            onMouseDown={AddMoveEvent}
            className={style.neumorphism}
            style={{left: 0, top: 0}}
        />
    );
}

export default NeumorphismBlock;
