//Select .first-container from the DOM
const firstContainer = document.querySelector(".first-container");
let containerDOMRect = firstContainer.getBoundingClientRect(); //Get the DOMRect position of firstContainer
let firstContainerPositionObject = { //Put the top, right, bottom, and left positions of firstContainer inside the firstContainerPositionObject object
    top: containerDOMRect.top,
    right: containerDOMRect.right,
    bottom: containerDOMRect.bottom,
    left: containerDOMRect.left,
};

console.log(`This is the firstContainer top position: ${firstContainerPositionObject.top}`);

//Select .box from the DOM
const box = document.querySelector(".box");
let boxDOMRect = box.getBoundingClientRect(); //Get the DOMRect position of box
let boxPositionObject = { //Put the top, right, bottom, and left positions of box inside the boxPositionObject object
    top: boxDOMRect.top,
    right: boxDOMRect.right,
    bottom: boxDOMRect.bottom,
    left: boxDOMRect.left,
};

//Get the box position values from boxPositionObject and assign them to the variables below
let boxTopPosition = boxPositionObject.top;
let boxRightPosition = boxPositionObject.right;
let boxBottomPosition = boxPositionObject.bottom;
let boxLeftPosition = boxPositionObject.left;

const initialDistanceOnAllSides = { //Calculate the distance between .first-container and .box on all sides and put them in the object initialDistanceOnAllSides
    topSide: boxPositionObject["top"] - firstContainerPositionObject["top"],
    rightSide: firstContainerPositionObject["right"] - boxPositionObject["right"],
    bottomSide: firstContainerPositionObject["bottom"] - boxPositionObject["bottom"],
    leftSide: boxPositionObject["left"] - firstContainerPositionObject["left"],
}

let messageNumber = 0; // Variable to store the index of the closest distance to the .box
let message = ""; // Variable to store the arrow key direction corresponding to the closest distance

let initialDistanceArray = []; //Array to store the initial distance on all sides of .box from .firstContainer
let newDistanceArray = []; //Array to store the new distance on all sides of .box from .firstContainer
let newDistanceOnAllSides = {}; //Calculate the new distance between .firstContainer and .box on all sides and put it in newDistanceOnAllSides

function checkEvent(msg, event) { // Function to check if the provided event matches the stored message
    if (msg == event) { // If the message matches the event key
        return true; // Return true
    }
}

function updateDistance(arr1, obj) {
    boxDOMRect = box.getBoundingClientRect(); //Get the new DOMRect for box
    boxPositionObject = { //Put the top, right, left, bottom, and left positions in the boxPositionObject
        top: boxDOMRect.top,
        right: boxDOMRect.right,
        bottom: boxDOMRect.bottom,
        left: boxDOMRect.left,
    }

    obj = {};

    obj = { //Calculate the new distance between .firstContainer and .box on all sides and put it in newDistanceOnAllSides
        topSide: boxPositionObject["top"] - firstContainerPositionObject["top"],
        rightSide: firstContainerPositionObject["right"] - boxPositionObject["right"],
        bottomSide: firstContainerPositionObject["bottom"] - boxPositionObject["bottom"],
        leftSide: boxPositionObject["left"] - firstContainerPositionObject["left"],
    }

    console.log(obj);

    arr1 = [];

    for (x in obj) {
        arr1.push(obj[x]); //Push the values of the newDistanceOnAllSides object into the newDistanceArray array 
    }

    findClosestDistance(arr1);
}

function findClosestDistance(arr) { //Function to find the cloesest distance to .box
    console.log(`This is newDistanceArray inside findClosestDistance: ${newDistanceArray}`);
    let smallest = 5000;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            messageNumber = i;
            smallest = arr[i];
        }
    }
    console.log(`This is the smallest: ${smallest}`);
    console.log(`This is the message: ${messageNumber}`);
    switch (messageNumber) {
        case 0:
            message = "ArrowUp";
            break;
        case 1:
            message = "ArrowRight";
            break;
        case 2:
            message = "ArrowDown";
            break;
        case 3:
            message = "ArrowLeft";
            break;
    }

    console.log(message);
}

document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowUp") {
        if (checkEvent(message, event.key)) {
            if (boxTopPosition > firstContainerPositionObject.top) {
                boxTopPosition -= 2; //Subtract 2 from the box top position to move it upward
                box.style.top = `${boxTopPosition}px`
            }
            box.top = boxTopPosition; //Set the new top position

            updateDistance(newDistanceArray, newDistanceOnAllSides);
            console.log(compareBoxAndWall(boxPositionObject.bottom, wallPos.top));
        } else {
            boxTopPosition -= 2; //Subtract 2 from the box top position to move it upward
            box.style.top = `${boxTopPosition}px`
            box.top = boxTopPosition; //Set the new top position

            updateDistance(newDistanceArray, newDistanceOnAllSides);
            console.log(compareBoxAndWall(boxPositionObject.bottom, wallPos.top));
        }
    }
});



document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowRight") {
        if (compareBoxAndWall(boxPositionObject.bottom, wallDOMRect.top, wallDOMRect.bottom)) {
            wallLeftBarrier();
        } else if (checkEvent(message, event.key)) {
            if (boxRightPosition < firstContainerPositionObject.right) {
                boxLeftPosition += 2; //Subtract 2 from the box top position to move it upward
                box.style.left = `${boxLeftPosition}px`
            }
            box.left = boxLeftPosition;
            boxRightPosition = boxPositionObject.right;

            updateDistance(newDistanceArray, newDistanceOnAllSides);
        } else {
            boxLeftPosition += 2; //Subtract 2 from the box top position to move it upward
            box.style.left = `${boxLeftPosition}px`
            box.left = boxLeftPosition; //Set the new top position

            updateDistance(newDistanceArray, newDistanceOnAllSides);
        }
    }
});



document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowDown") {
        if (compareBoxAndWallHorizontalLength(boxPositionObject.top, boxPositionObject.right, wallDOMRect.top, wallDOMRect.left)) {
            wallTopBarrier();
        } else if (checkEvent(message, event.key)) {
            if (boxBottomPosition < firstContainerPositionObject.bottom) {
                boxTopPosition += 2; //Subtract 2 from the box top position to move it upward
                box.style.top = `${boxTopPosition}px`
            }
            box.top = boxTopPosition; //Set the new top position
            boxBottomPosition = boxPositionObject.bottom;

            updateDistance(newDistanceArray, newDistanceOnAllSides);
            console.log(compareBoxAndWall(boxPositionObject.bottom, wallPos.top));
        } else {
            boxTopPosition += 2; //Subtract 2 from the box top position to move it upward
            box.style.top = `${boxTopPosition}px`
            box.top = boxTopPosition; //Set the new top position

            updateDistance(newDistanceArray, newDistanceOnAllSides);
            console.log(compareBoxAndWall(boxPositionObject.bottom, wallPos.top));
        }
    }
});

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

//**************************************************************************************************************************************************** */

//Select .wall from the DOM
const wall = document.querySelector(".wall");
const wallDOMRect = wall.getBoundingClientRect(); //get the DOMRect positions of .wall
const wallPos = { //put the DOMRect positions of .wall into the wallPos object.
    top: wallDOMRect.top,
    right: wallDOMRect.right,
    bottom: wallDOMRect.bottom,
    left: wallDOMRect.left,
};

//Function to check the position of .box relative to .wall
function compareBoxAndWall(boxBottom, wallTop, wallBottom) {
    if (boxBottom > wallTop && boxBottom < wallBottom) { //condition to check if .box is within the vertical distance of .wall
        if (compareBoxLeftAndWallLeft(boxPositionObject.left, wallPos.left)) {
            return true;
        }
    }
}

function compareBoxAndWall2(boxBottom, wallTop, wallBottom) {
    if (boxBottom > wallTop && boxBottom < wallBottom) {
        if (compareBoxRightAndWallLeft(boxPositionObject.right, wallPos.left)) {
            return true;
        }
    }
}

//Function to check if box.left is less than wall.left
function compareBoxLeftAndWallLeft(boxLeft, wallLeft) {
    if (boxLeft < wallLeft) {
        return true;
    }
}

function compareBoxRightAndWallLeft(boxRight, wallLeft) {
    if (boxRight > wallLeft) {
        return true;
    }
}

//Function to ensure .box doesn't cross wall.left
function wallLeftBarrier() {
    if (boxRightPosition < wallPos.left) {
        boxLeftPosition += 2;
        box.style.left = `${boxLeftPosition}px`;
    }
    box.left = boxLeftPosition;
    boxLeftPosition = boxPositionObject.left;
    boxRightPosition = boxPositionObject.right;
    console.log(`This is boxRightPosition: ${boxRightPosition}`);
    console.log(`This is wallPos.left position: ${wallPos.left}`);

    updateDistance(newDistanceArray, newDistanceOnAllSides);
}

function wallRightBarrier() {
    if (boxLeftPosition > wallPos.right) {
        boxLeftPosition -= 2;
        box.style.left = `${boxLeftPosition}px`;
    }
    box.left = boxLeftPosition;
    boxLeftPosition = boxPositionObject.left;
    boxRightPosition = boxPositionObject.right;
    boxTopPosition = boxPositionObject.top;
    boxBottomPosition = boxPositionObject.bottom;

    updateDistance(newDistanceArray, newDistanceOnAllSides);
}


//Function to check .box is within .wall horizontal length
function compareBoxAndWallHorizontalLength(boxBottom, boxRight, wallTop, wallLeft) {
    if (boxRight > wallLeft && boxBottom < wallTop) {
        return true;
    }
}

function wallTopBarrier() {
    if (boxBottomPosition < wallPos.top) {
        boxTopPosition += 2;
        box.style.top = `${boxTopPosition}px`;
    }
    box.top = boxTopPosition;
    boxTopPosition = boxPositionObject.top;
    boxBottomPosition = boxPositionObject.bottom;

    updateDistance(newDistanceArray, newDistanceOnAllSides);
}