# Bootcamp Day 1
## Introduction 
This project creates 3 functions and their respective tests to cover the learning outcome for the first day of the scintillating  Andela
cycle XXI bootcamp.
The functions are:
- fizzBuzz
- aritGeo
- getPrimes

## function fizzBuzz() 
The fizzBuzz function returns 'Fizz', 'Buzz', 'FizzBuzz', or the argument it receives, all depending on the argument of the function, a number that is divisible by, 3, 5, or both 3 and 5, respectively.
When the number is not divisible by 3 or 5, the number itself is returned.

## function aritGeo()
The aritGeo function takes one argument, an Array, and checks if the array passed as an argument is an arithmetic progression, geometric progression, or neither an arithmetic nor a geometric. It also checks whether the array is empty.
For arithmetic progressions, arithGeo returns Arithmetic.
For geometric progressions, aritGeo returns Geometric.
For neither of the above, aritGeo returns -1.
For an empty array, aritGeo returns 0.

## function getPrimes()
The getPrimes function takes an integer value n as argument and generates prime numbers from 0 to n with asymptotic analysis.
The generated prime numbers should are in an array.
If no prime number is obtainable for the input, getPrimes returns an empty array.
Edge cases such as invalid input, negative input value, or zero as input are also addressed.

# Test
To run the test
* Clone the repository by running the command `git clone https://github.com/baasbank/SLC-DAY-0.git`
* Navigate to the folder by running the command `cd SLC-DAY-0`
* Install the project dependencies by running the command `npm install`
* Navigate into each folder to run each test, for example to run the `aritGeo` test, run the command
* * `cd aritGeo`
* * `jasmine`

# Technology 
`Node`

# Author
Baasbank Akinmuleya
