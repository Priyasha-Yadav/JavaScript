// for (i = 1; i <= 5; i++) {
//     for (j = 1; j <= 5; j++) {
//         console.log('i,j:', i, j)
//     }
// }
// for (var i = 1; i <= 5; i++) {
//     string='';
//     for (var j = 1; j <= i; j++) {
// string=string+'#';
//     }
//         console.log(string)
// }

// for (i = 1; i <= 5; i++) {
//     for (j = 1; j <= i; j++) {
//         for (k = 1; k <= j; k++) {
//             console.log('i,j,k:', i, j, k)
//         }
//     }
// }

// for (i = 1; i <= 5; i++) {
//         for (j = 1; j >5; j++) {
//             console.log('i,j:', i, j)
//         }
//     }




// for (var i = 1; i <= 5; i++) {
//     string='';
//     for (var j = 1; j <= i; j++) {
// string=string+j;
//     }
//         console.log(string)
// }


// var size = 5; // The number of rows for the top half of the diamond

// // Top half of the diamond
// for (var i = 1; i <= size; i++) {
//     var string = '';
//     // Print leading spaces
//     for (var j = 1; j <= size - i; j++) {
//         string += ' ';
//     }
//     // Print hashes
//     for (var k = 1; k <= (2 * i - 1); k++) {
//         string += '#';
//     }
//     console.log(string);
// }

// // Bottom half of the diamond
// for (var i = size - 1; i >= 1; i--) {
//     var string = '';
//     // Print leading spaces
//     for (var j = 1; j <= size - i; j++) {
//         string += ' ';
//     }
//     // Print hashes
//     for (var k = 1; k <= (2 * i - 1); k++) {
//         string += '#';
//     }
//     console.log(string);
// }


// var size = 5; // The number of rows for the pattern

// for (var i = 1; i <= size; i++) {
//     var string = '';

//     // Print leading spaces
//     for (var j = 1; j <= size - i; j++) {
//         string += ' ';
//     }

//     // Print decreasing numbers
//     for (var k = i; k >= 1; k--) {
//         string += k;
//     }

//     console.log(string);
// }

// // var size = 4; // The number of rows for the pattern

// for (var i = 1; i <= size; i++) {
//     var string = '';

//     // Print leading spaces
//     for (var j = 1; j <= size - i; j++) {
//         string += ' ';
//     }

//     // Print letters
//     for (var k = 1; k <= i; k++) {
//         string += String.fromCharCode(64 + k); // 64 + k gives us 'A', 'B', 'C', ...
//     }

//     console.log(string);

// }
/////////
 // The number of rows for the pattern

// for ( var i = 1; i <= 5; i++) {
//     var string = '';

//     // Print leading spaces
//     for ( var j = 1; j <= 4; j++) {
//         string += ' ';
//     }

//     // Print decreasing numbers
//     for (var k = i; k >= 1; k--) {
//         string += k;
//     }

//     console.log(string);
// }

// for (var i = 1; i <= 4; i++) {
//     var string = '';

//     for (var j = 1; j <= 4; j++) {
//         string += String.fromCharCode(64 + i); }
//     console.log(string)
//     }


//A
//AB
//ABC
//ABCD
// for (var i = 1; i <= 4; i++) {
//     string='';
//     for (var j = 1; j <= i; j++) {
// string=string+String.fromCharCode(64+j);
//     }
//         console.log(string)
// }

// A
// BB
// CCC
// DDDD
// for (var i = 1; i <= 4; i++) {
//     string='';
//     for (var j = 1; j <= i; j++) {
// string=string+String.fromCharCode(64+i);
//     }
//         console.log(string)
// }


// A
// BA
// CBA
// DCBA



for (var i = 0; i < 4; i++) {
    var string = '';
    

    for (var j = i; j >= 0; j--) {
        string += String.fromCharCode(65 + j); 
    }
    
    console.log(string);
}





//C
//CB
//CBA
// for (var i = 1; i <= 3; i++) {
//     string='';
//     for (var j = 1; j <= i; j++) {
// string=string+String.fromCharCode(68-j);
//     }
//         console.log(string)
// }

