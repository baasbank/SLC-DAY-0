function fizzBuzz(num)  {
    if (typeof num == 'number') { 
        if (num % 3 == 0 && num % 5 == 0) {
            return "fizzBuzz";
        }
        else if (num % 5 == 0) {
            return "buzz";
        } 
        else if (num % 3 == 0) {
            return "fizz";
        } 
        else {
            return num ;
        }
    }
    else {
console.log("Numbers only");  
    }
}