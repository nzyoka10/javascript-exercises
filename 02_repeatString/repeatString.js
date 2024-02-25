const repeatString = function(string, num) {
    if(num<0) return "ERROR";
    let result = '';

        for (let i=0; i<num; i++) 
        {
            result += string;
        }
        return result;  
};
repeatString("hey", 3);

module.exports = repeatString;






// You are given a string and you need to find the number of times that each character appears in
/**
    let string = 'hey';
    for (let i = 1; i < arguments.length; i++) {
        let num = arguments[i];
        if (num < 0) throw new Error("Number must be positive");
        while(num > 0) {
            string += string;
            num--;
        }
    }
    return string;
}
console.log(repeatString); // Output: "heyheyhey"</s>



    let str = '';
    for (let i=0; i<arguments[1]; i++) {
        str += arguments[0] + ' ';
    }
    return str.trim();
}; 
console.log(repeatString); // Output: Function repeatString
*/



//* Test
//let repeated = myStr.repeat(3);

// Define a string variable 'myStr' and assign it the value 'hello world'
// let myStr = 'hello world';

// Initialize an empty string variable 'repeated' to store the repeated strings
// let repeated = '';

// Define a function 'repeatString' which takes a parameter 'num' indicating the number of times to repeat the string
//function repeatString(num) 
//{
    // Iterate from 0 to 'num - 1'
  //  for (let i = 0; i < num; i++) 
//    {
        // Concatenate the value of 'myStr' and a space to 'repeated' for each iteration
   //     repeated += myStr + ' ';
  //  }
    // Output the repeated string to the console
 //   console.log('\n', repeated);
// }

// Call the 'repeatString' function with an argument 'value(2, 3,36)' to repeat the string 'hello world' twice
// repeatString(112);

//console.log(repeated);














// Do not edit below this line
// module.exports = repeatString;
