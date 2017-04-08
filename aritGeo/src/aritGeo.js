function aritGeo(numbers){

    if (numbers.length == 0) { //Returns 0 if the numbersay is empty
        return 0;
    }
    

    var diff = numbers[1] - numbers[0]; //Computes the common difference
    var ratio = numbers[1]/numbers[0]; //Computes the common ratio

    var arithmetic = true; 
    var geometric = true; 
    /*Iterating through all numbersay elements, and comparing the difference between consecutive elements to the common difference.
    If both are not equal, it's not an A.P and should return false for arithmetic.
    Does the same thing for G.P comparing the ratio between elements to the common ratio.*/
    for (var i = 0; i < numbers.length- 1; i++){ 
        if (numbers[i + 1] - numbers[i] !== diff ) { 
            arithmetic = false; // 
        }
        if (numbers[i + 1] / numbers[i] !== ratio ) {
            geometric = false;
        }
    }
    if (arithmetic == true) {
        return "Arithmetic";
    }
    else if (geometric == true) {
        return "Geometric";
    }
    else {
        return -1; // Returns -1 for numbersays that are neither A.Ps nor G.Ps.
    }
}
module.exports = aritGeo;