/// <reference path="testArray.js">
"use strict";
describe("Array tests", function () {
    it("Function gives the correct result", function () {
        // Arrange
        var myArr = [1, 2, 3, 6, 7, 13, 349, 3483, 5432];

        var expected = [ 2, 6, 14, 26, 698, 6966 ];
 
        // Act
        var result = onlyDoubledOdds(myArr);
 
        // Assert
        expect(result).toEqual(expected);
    });
 
    it("Function gives the correct result with negative numbers", function () {
        // Arrange
        var myArr = [-1, 2, 3, 6, 7, 13, 349, 3483, 5432];
        var expected = [];
 
        // Act
        var result = onlyDoubledOdds(myArr);
 
        // Assert
        expect(result).toEqual(expected);
    });

    it("Function gives the correct result with fractional numbers", function () {
        // Arrange
        var myArr = [4.5, 2, 3, 6, 7, 13, 349, 3483, 5432];
        var expected = [9, 6, 14, 26, 698, 6966];
 
        // Act
        var result = onlyDoubledOdds(myArr);
 
        // Assert
        expect(result).toEqual(expected);
    });

    it("Function gives the correct result with elements  typeof 'Boolean' ", function () {
        // Arrange
        var myArr = [false, 2, 3, 6, 7, 13, 349, 3483, 5432];
        var expected = [];
 
        // Act
        var result = onlyDoubledOdds(myArr);
 
        // Assert
        expect(result).toEqual(expected);
    });

    it("Function gives the correct result with elements not typeof 'String' ", function () {
        // Arrange
        var myArr = ['one', 2, 3, 6, 7, 13, 349, 3483, 5432];
        var expected = [];
 
        // Act
        var result = onlyDoubledOdds(myArr);
 
        // Assert
        expect(result).toEqual(expected);
    });

    it("Function gives the correct result with elements not typeof 'String' ", function () {
        // Arrange
        var myArr = ['1', 2, 3, 6, 7, 13, 349, 3483, 5432];
        var expected = [];
 
        // Act
        var result = onlyDoubledOdds(myArr);
 
        // Assert
        expect(result).toEqual(expected);
    });

    it("Function gives the correct result with NaN elements", function () {
        // Arrange
        var myArr = [, 2, 3, 6, 7, 13, 349, 3483, 5432];
        var expected = [];
 
        // Act
        var result = onlyDoubledOdds(myArr);
 
        // Assert
        expect(result).toEqual(expected);
    });

    it("Function gives the correct result max length of sourceArray 4294967296", function () {
        // Arrange

        var bigArray = [], i = 0;
 
        bigArray.length = 4294967295;
        
        var expected = [];
 
        // Act
        var result = onlyDoubledOdds(bigArray);
 
        // Assert
        expect(result).toEqual(expected);
    });

});