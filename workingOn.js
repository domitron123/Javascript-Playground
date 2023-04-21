// variables: initialize printGrid as an empty string; initialize board as an empty array
let printGrid = ""
let board = new Array(3)
// board = [ , , ]

// define genrateBoard function
function generateBoard() {
    
    // for loop to iterate through each empty element in board array
    for(let i = 0; i < board.length; i++) {
        // create a new subarray with 3 elements within each element 
        board[i] = new Array(3)
        // ([ , , ], [ , , ], [ , , ])
    }

    // for loop to iterate through each subarray in board array
    for(let i = 0; i < board.length; i++) {
        // for loop to iterate through each element in subarray
        for(let j = 0; j < board[i].length; j++) {
            // assign each element in to "-"
            board[i][j] = "-"
        }
    }

    // for loop to iterate through each subarray in board array
    for(let i = 0; i < board.length; i++) {
        // concatenate each subarray as a string with a space between each element; assign to printGrid
        printGrid += board[i].join(" ") 
        // add a new line inbetween each subarray within printGrid
        printGrid += "\n"
    }
    // return printGrid and end the function
    return printGrid
}

// invoke the function and log it to the terminal
console.log(generateBoard())