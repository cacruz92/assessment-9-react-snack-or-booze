function unroll(squareArray) {
    let newArray = [];

    if(squareArray.length === 0) return newArray;

    let top = 0;
    let bottom = squareArray.length-1;
    let left = 0;
    let right = squareArray[0].length-1;

    while(top <= bottom && left <= right){

        //going from top-left to top-right
        for(let i = left; i <= right; i++){
            newArray.push(squareArray[top][i])
        }
        // move down one row, while the index is still in the last spot in the array
        top++;

        // keep moving downward along the right side of the square
        for(let i = top; i <= bottom; i++){
            newArray.push(squareArray[i][right])
        }
        // move to the left, while staying in the bottom array
        right--;

        // move to the left
        for(let i = right; i >= left; i--){
            newArray.push(squareArray[bottom][i])
        }
        // move up
        bottom--

        if (left <= right){
            //move upward
            for(let i = bottom; i >= top; i--){
                newArray.push(squareArray[i][left])
            }
            //move to the right
            left++
        }
    }




    console.log(newArray)
    return newArray
}

const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

unroll(array);
        
    


module.exports = unroll;



