function fizzBuzz(val)  { 
    if (val % 3 == 0 && val % 5 == 0) {
        return "fizzBuzz";
      }
    else if (val % 5 == 0) {
        return "buzz";
    } 
    else if (val % 3 == 0) {
        return "fizz";
    } 
    else {
        return val ;
        }
}