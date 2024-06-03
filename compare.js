//Function to check the position of .box relative to .wall
function compareBoxAndWall(boxBottom, wallTop, wallBottom) {
    if (boxBottom > wallTop && boxBottom < wallBottom) { //condition to check if .box is within the vertical distance of .wall
        if (compareBoxLeftAndWallLeft(boxPositionObject.left, wallPos.left)) {
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




(boxRight, wallLeft, wallRight)