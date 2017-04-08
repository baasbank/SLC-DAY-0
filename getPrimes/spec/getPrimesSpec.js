var getPrimes = require('../src/getPrimes');

describe("Get Primes tests ", function() {
  describe("Case for invalid input", function() {

    it("should return 'not a number' for 'null'", function() {
      expect(getPrimes(null)).toEqual('not a number');
    });

    it("should return 'not a number' for '' ", function() {
      expect(getPrimes("")).toEqual('not a number');
    });

    it("should return 'not a number' for 'true'", function() {
      expect(getPrimes(true)).toEqual('not a number');
    });

    it("should return 'not a number' for 'false'", function() {
      expect(getPrimes(false)).toEqual('not a number');
    });

    it("should return 'not a number' for '{}'", function() {
      expect(getPrimes({})).toEqual('not a number');
    });
  });

  describe("Case for number less than or equal to 0", function() {

    it("should return 'invalid input' for `0`", function() {
      expect(getPrimes(0)).toBe('invalid input');
    });

    it("should return 'invalid input' for `-1`", function() {
      expect(getPrimes(-1)).toBe('invalid input');
    });
  });

  describe("Case for Prime Numbers", function() {

    it("should return '[]' for '1'", function() {
      expect(getPrimes(1)).toEqual([]);
    });

    it("should return '[ 2, 3 ]' for '3'", function() {
      expect(getPrimes(3)).toEqual([ 2, 3 ]);
    });

    it("should return '[ 2, 3, 5 ]' for '5'", function() {
      expect(getPrimes(5)).toEqual([ 2, 3, 5 ]);
    });

    it("should return '[2, 3, 5, 7, 11, 13 ]' for '15'", function() {
      expect(getPrimes(15)).toEqual([2, 3, 5, 7, 11, 13 ]);
    });
  });
});