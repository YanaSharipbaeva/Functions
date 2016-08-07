/// <reference path="search.js">
"use strict";
describe("Search tests", function () {
    it("Function gives the correct result: search element >= 0", function () {
        // Arrange
        var expected = 'argument should be >= 0',
        result;
        // Act

        var result = quickSearch(-5);

 
        // Assert
        expect(result).toBe(expected);
    });

    it("Function gives the correct result: search element is even", function () {
        // Arrange
        var expected = 'argument should be even';
 
        // Act
        var result = quickSearch(5);
        // Assert
        expect(result).toBe(expected);
    });

    it("Function gives the correct result: search element is defined", function () {
        // Arrange
        var expectedResult = 'argument should be defined';
 
        // Act
        var result = quickSearch();
 
        // Assert
        expect(result).toBe(expectedResult);
    });


});