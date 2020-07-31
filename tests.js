// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function () {
    it('should say Hello!', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello, Jane!"', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!"', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!"', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return "Hello, World!"', function () {
        expect(sayHello("World")).toBe("Hello, World!");
    });
})

describe("isFive", function () {
    it('should determine if five', function () {
        expect(typeof isFive).toBe("function");
    });
    it('should return true if five', function () {
        expect(isFive(5)).toBe(true);
        expect(isFive(6)).toBe(false);
        expect(isFive(.1)).toBe(false);
        expect(isFive("5")).toBe(true);
        expect(isFive(".1")).toBe(false);
        expect(isFive(-5)).toBe(false);
    });
});

describe("isEven", function () {
    it('should determine if even.', function () {
        expect(typeof isEven).toBe("function");
    });
    it('should return boolean answer.', function () {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true if 2 is entered.', function () {
        expect(isEven(2)).toBe(true);
        expect(isEven("2")).toBe(true);
        expect(isEven(-4)).toBe(true);
        expect(isEven(3)).toBe(false);
        expect(isEven("banana")).toBe(false);
        expect(isEven("8")).toBe(true);
    });
});

describe("isVowel", function () {
    it('should be defined as a function', function () {
        expect(typeof isVowel).toBe("function");
    });
    it('should return a boolean', function () {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true if "a" is entered', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true if "e" is entered', function () {
        expect(isVowel("e")).toBe(true);
    });
    it('should return true if "i" is entered', function () {
        expect(isVowel("i")).toBe(true);
    });
    it('should return true if "o" is entered', function () {
        expect(isVowel("o")).toBe(true);
    });
    it('should return true if "u" is entered', function () {
        expect(isVowel("u")).toBe(true);
    });
    it('should return false if "y" is entered', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false if "true" is entered', function () {
        expect(isVowel("true")).toBe(false);
    });
    it('should return false if "false" is entered', function () {
        expect(isVowel("false")).toBe(false);
    });
    it('should return false if "banana" is entered', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false if nothing is entered', function () {
        expect(isVowel()).toBe(false);
    });
});


describe("add", function () {
    it('should be defined as a function.', function () {
        expect(typeof add).toBe("function");
    });
    it('should return a number.', function () {
        expect(typeof add()).toBe("number");
    });
    it('should return 5 if 2 and 3 are entered.', function () {
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 if -3 and -9 are entered.', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 if "5" and 6 are entered.', function () {
        expect(add("5", 6)).toBe(11);
    });
    it('should return 6 if "-4" and "10 are entered.', function () {
        expect(add("-4", "10")).toBe(6);
    });
    it('should return NaN if "banana" and "split" are entered.', function () {
        expect(add("banana", "split")).toBe(NaN);
    });
    it('should return NaN if 2 and "apples" are entered.', function () {
        expect(add(2, "apples")).toBe(NaN);
    });
    it('should return NaN if nothing is entered.', function () {
        expect(add("", "")).toBe(NaN);
    });
})













