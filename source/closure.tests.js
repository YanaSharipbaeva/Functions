/// <reference path="closure.js">
"use strict";
describe("Closure tests", function () {
    it("Function gives the correct result: redefinition foo, variable foo is taken from bar", function () {
        // Arrange
        var expected = 'some';
 
        // Act
        var some = closure();
 
        // Assert
        expect(some()).toBe(expected);
    });

    it("Function gives the correct result:varriable foo outside of bar should be 'something wrong' ", function () {
        // Arrange
        var expected = 'something wrong';
 
        // Act
        var some = closure();
 
        // Assert
        expect(foo).toBe(expected);
    });
});