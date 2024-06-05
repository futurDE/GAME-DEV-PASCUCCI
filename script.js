//Select DOM elements
const outerSquare = document.querySelector(".outer-square");
const box = document.querySelector(".box");
const wall = document.querySelector(".wall");

//Global variables
let distanceBetweenRects = []; //distance between outerSquare rects and box rects.
let boxDOMRect = {}; //box DOMRects. Updated each time the box moves.
let boxTop; //top position of box. will be updated each time the box moves
let boxRight; //right position of box. will be updated each time the box moves
let boxBottom; //bottom position of box. will be updated each time the box moves
let boxLeft; //left position of box. will be updated each time the box moves

const getOuterSquareDOMRect = outerSquare.getBoundingClientRect(); //Get outerSquare DOMRect
const wallDOMRect = wall.getBoundingClientRect(); //Get wall DOMRect

//Get box DOMRect
function getBoxDOMRect() {
    let getBoxDOMRect = box.getBoundingClientRect();
    boxDOMRect = {
        top: getBoxDOMRect.top,
        right: getBoxDOMRect.right,
        bottom: getBoxDOMRect.bottom,
        left: getBoxDOMRect.left,
    };

    boxTop = boxDOMRect.top;
    boxRight = boxDOMRect.right;
    boxBottom = boxDOMRect.bottom;
    boxLeft = boxDOMRect.left;
    console.log(`This is box top: ${boxDOMRect.top}, This is box right: ${boxDOMRect.right}, This is box bottom: ${boxDOMRect.bottom}, This is box left: ${boxDOMRect.left}`);
}
getBoxDOMRect();

//Get the distance between the rects. outerSquare rects - box rects.
function getDistanceBetweenRects() {
    let newObject = {
        top: boxDOMRect.top - getOuterSquareDOMRect.top,
        right: getOuterSquareDOMRect.right - boxDOMRect.right,
        bottom: getOuterSquareDOMRect.bottom - boxDOMRect.bottom,
        left: boxDOMRect.left - getOuterSquareDOMRect.left,
    };

    for (x in newObject) {
        distanceBetweenRects.push(newObject[x]);
    }

    console.log(`distanceBetweenRects: ${distanceBetweenRects}`);
}
getDistanceBetweenRects();
s
// Depending on the arrow key pressed, update the box's position:
// After each move, update the box's DOMRect and global position variables
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            wallBottomBarrierConditions();
            if (tr3 == true) {
                wallBottomBarrier();
            } else {
                moveBox();
            }
            break;
        case "ArrowRight":
            wallLeftBarrierConditions();
            if (truthiness == true) {
                wallLeftBarrier();
            } else {
                moveBox();
            }
            break;
        case "ArrowDown":
            wallTopBarrierConditions();
            if (tr2 == true) {
                wallTopBarrier();
            } else {
                moveBox();
            }
            break;
        case "ArrowLeft":
            wallRightBarrierConditions();
            if (tr1 == true) {
                wallRightBarrier();
            } else {
                moveBox();
            }
        default:
    }
});

//How do I use only one variable (truthiness) to check wall collision conditions?
//Don't want to use tr1, don't want to use tr2, and don't want to use tr3
let truthiness = false;
let tr1 = false;
let tr2 = false;
let tr3 = false;
//Conditions for the wall left barrier
function wallLeftBarrierConditions() {
    if (boxBottom > wallDOMRect.top && boxBottom < wallDOMRect.bottom) {
        if (boxRight < wallDOMRect.left) {
            truthiness = true;
        }
    } else {
        truthiness = false;
    }
    console.log(truthiness);
}

function wallLeftBarrier() {
    if (boxRight < wallDOMRect.left && boxRight < wallDOMRect.right) {
        boxLeft += 2;
        box.style.left = `${boxLeft}px`;
    }
    box.left = boxLeft; 
    getBoxDOMRect();
}

//Conditions for the wall right barrier
function wallRightBarrierConditions() {
    if (boxBottom > wallDOMRect.top && boxBottom < wallDOMRect.bottom) {
        if (boxLeft > wallDOMRect.right && boxLeft > wallDOMRect.left) {
            tr1 = true;
        }
    } else {
        tr1 = false;
    }
    console.log(truthiness);
}

function wallRightBarrier() {
    if (boxLeft > wallDOMRect.right && boxRight > wallDOMRect.right) {
        console.log(`wallRightBarrier()`);
        boxLeft -= 2;
        box.style.left = `${boxLeft}px`;
    }
    box.left = boxLeft;
    getBoxDOMRect();
}

//Conditions for the wall top barrier
function wallTopBarrierConditions() {
    if (boxRight > wallDOMRect.left && boxLeft < wallDOMRect.right) {
        if (boxBottom < wallDOMRect.top) {
            tr2 = true;
        }
    } else {
        tr2 = false;
    }
}

function wallTopBarrier() {
    if (boxBottom < wallDOMRect.top) {
        boxTop += 2;
        box.style.top = `${boxTop}px`;
    }
    box.top = boxTop;
    getBoxDOMRect();
}

//Conditions for the wall bottom barrier
function wallBottomBarrierConditions() {
    if (boxRight > wallDOMRect.left && boxLeft < wallDOMRect.right) {
        if (boxTop > wallDOMRect.bottom) {
            tr3 = true;
        }
    } else {
        tr3 = false;
    }
}

function wallBottomBarrier() {
    if (boxTop > wallDOMRect.bottom) {
        boxTop -= 2;
        box.style.top = `${boxTop}px`;
    }
    box.top = boxTop;
    getBoxDOMRect();
}

//Move the box within the outer square
function moveBox() {
    if (event.key == "ArrowUp") {
        if (boxTop > getOuterSquareDOMRect.top) { // - ArrowUp: move the box up by 2px if it is not at the top edge of the outer square
            boxTop -= 2;
            box.style.top = `${boxTop}px`;
        } getBoxDOMRect();
    } else if (event.key == "ArrowRight") {
        if (boxRight < getOuterSquareDOMRect.right) { // - ArrowRight: move the box right by 2px if it is not at the right edge of the outer square
            boxLeft += 2;
            box.style.left = `${boxLeft}px`;
        } getBoxDOMRect();
    } else if (event.key == "ArrowDown") {
        if (boxBottom < getOuterSquareDOMRect.bottom) { // - ArrowDown: move the box down by 2px if it is not at the bottom edge of the outer square
            boxTop += 2;
            box.style.top = `${boxTop}px`;
        } getBoxDOMRect();
    } else {
        if (boxLeft > getOuterSquareDOMRect.left) { // - ArrowLeft: move the box left by 2px if it is not at the left edge of the outer square
            boxLeft -= 2;
            box.style.left = `${boxLeft}px`;
        } getBoxDOMRect();
    }
}