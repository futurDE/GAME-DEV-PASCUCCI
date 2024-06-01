document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowLeft") {
        if (compareBoxAndWall2(boxPositionObject.bottom, wallDOMRect.top, wallDOMRect.bottom)) {
            wallRightBarrier();
        } else if (checkEvent(message, event.key)) {
            if (boxLeftPosition > firstContainerPositionObject.left) {
                boxLeftPosition -= 2; //Subtract 2 from the box top position to move it upward
                box.style.left = `${boxLeftPosition}px`
            }
            box.top = boxLeftPosition; //Set the new top position

            updateDistance(newDistanceArray, newDistanceOnAllSides);
        } else {
            boxLeftPosition -= 2; //Subtract 2 from the box top position to move it upward
            box.style.left = `${boxLeftPosition}px`
            box.left = boxLeftPosition; //Set the new top position

            updateDistance(newDistanceArray, newDistanceOnAllSides);
        }
    }
});