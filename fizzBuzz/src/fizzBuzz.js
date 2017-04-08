function fizzBuzz(num)  {

    //Checks that value supplied is a number
    if (typeof num != 'number'){
        return "Please input a number";
    }
    
    // Returns 'FizzBuzz', 'Buzz', 'Fizz' for numbers that are divisible by 3 and 5, 5 only, 3 only respectively.
    if (typeof num == 'number') { 
        if (num % 3 == 0 && num % 5 == 0) {
            return "FizzBuzz";
        }
        else if (num % 5 == 0) {
            return "Buzz";
        } 
        else if (num % 3 == 0) {
            return "Fizz";
        } 
        else {
            return num ;
        }
    }
}
module.exports = fizzBuzz;