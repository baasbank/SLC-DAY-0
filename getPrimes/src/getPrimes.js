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
        else
		{
			for(var i = 1; i <= n; i++)
			{
					for(var j = 2; j <= n; j++)
				  {
					  if(i%j === 0 && j != i)
					  {
						  check = false;
					  }
				  }

				  if(check === true )
				  { 
				  	//if i  equal to 1 skip 
				  	if(i===1){
				  		continue;
				  	}else{
				  		//if i is prime add it to primeNum
					  primeNum.push(i);
				  	}
				    
				  }
				
				  check = true;
			}

			return primeNum;
		}
	}
};
    
