/// <reference path="functions.js">
"use strict";
describe("Classes tests", function () {
     it("Function gives the correct result: localFoo returns 7", function () {
        // Arrange
        var expected = 7;
 
        // Act
        var result = localFoo();
 
        // Assert
        expect(result).toBe(expected);
    });
});