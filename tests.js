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
        expect(isEven(-4)).toBe(false);
        expect(isEven(3)).toBe(false);
        expect(isEven("banana")).toBe(false);
        expect(isEven("8")).toBe(false);
        expect(isEven(infinity)).toBe(false);
        expect(isEven(true)).toBe(false);
        expect(isEven(false)).toBe(false);
    });
});

