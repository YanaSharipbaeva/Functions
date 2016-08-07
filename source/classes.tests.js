/// <reference path="classes.js">
"use strict";
describe("Classes tests", function () {
    it("Function gives the correct result: redifinitions of properties", function () {
        // Arrange
        var firstBar = new Bar();    
        firstBar.name = 'first bar';
        var expected = 'first bar';
 
        // Act
        var result = firstBar.name;
 
        // Assert
        expect(result).toEqual(expected);
    });

    it("Function gives the correct result: redifinitions of properties", function () {
        // Arrange
        var firstBar = new Bar();    
        firstBar.children.push(123);
        var expected = [123];
 
        // Act
        var result = firstBar.children;
 
        // Assert
        expect(result).toEqual(expected);
    });

    it("Function gives the correct result: redifinitions of properties", function () {
        // Arrange

        var firstBar = new Bar();    
        firstBar.someValue = 3;
        var expected = 3;

        // Act
        var result = firstBar.someValue;
 
        // Assert
        expect(result).toEqual(expected);
    });


    it("Function gives the correct result: if own property is not specified, it takes from parent constructor", function () {
        // Arrange

        var firstBar = new Bar();
        var expected = undefined;

        // Act
        var result = firstBar.someValue;
 
        // Assert
        expect(result).toEqual(expected);
    });

    it("Function gives the correct result: if own property is not specified, it takes from parent constructor", function () {
        // Arrange

        var firstBar = new Bar();
        var expected = [''];


        // Act
        var result = firstBar.getChildren();
 
        // Assert
        expect(result).toEqual(expected);
    });


    it("Function gives the correct result: if own property is not specified, it takes from parent constructor", function () {
        // Arrange
        var firstBar = new Bar();
        var expected = 'my name is ';


        // Act
        var result = firstBar.getName();
 
        // Assert
        expect(result).toEqual(expected);
    });

});