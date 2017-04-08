var getPrimes = function (n)
{
  var check = true;
  // declare an array variable primeNum
  var primeNum =[];
  // check if argument is of type number
	if(typeof n !== "number")
	{
	  // return "invalid input" if argument is less that equal to zero
		return "not a number";
	}
    else
	{
	  // check if argument is less than or equal to zero
		if(n <= 0)
		{
		  // return "invalid input" if argument is less that equal to zero
			return "invalid input";
		}
    }
}