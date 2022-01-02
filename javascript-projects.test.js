'use strict'
/**
 * jest tests on freeCodeCamp's "JavaScript Algorithms and Data Structures
 * Projects" using the (at the time) on-screen challenge test suite.
 * 
 * Additional tests supplied for exception handling. The exceptions should
 * not be thrown by any of freeCodeCamp's tests (assuming no further tests are
 * run beyond those listed on-screen).
 * 
 */
const projects = require('./javascript-projects.js');
const { expect, test } = require('@jest/globals');


test('palindrome: tests if string is projects.palindrome', () => {
    expect(typeof projects.palindrome("eye")).toBe('boolean');
    expect(projects.palindrome("eye")).toBe(true);
    expect(projects.palindrome("_eye")).toBe(true);
    expect(projects.palindrome("race car")).toBe(true);
    expect(projects.palindrome("not a projects.palindrome")).toBe(false);
    expect(projects.palindrome("A man, a plan, a canal. Panama")).toBe(true);
    expect(projects.palindrome("never odd or even")).toBe(true);
    expect(projects.palindrome("nope")).toBe(false);
    expect(projects.palindrome("almostomla")).toBe(false);
    expect(projects.palindrome("My age is 0, 0 si ega ym.")).toBe(true);
    expect(projects.palindrome("1 eye for of 1 eye.")).toBe(false);
    expect(projects.palindrome("0_0 (: /-\ :) 0-0")).toBe(true);
    expect(projects.palindrome("five|\_/|four")).toBe(false);
    expect(() => projects.palindrome(100.001)).toThrow(TypeError);
});


test('convertToRoman: converts num < 4000 to roman numeral', () => {
    expect(projects.convertToRoman(2)).toBe('II');
    expect(projects.convertToRoman(3)).toBe('III');
    expect(projects.convertToRoman(4)).toBe('IV');
    expect(projects.convertToRoman(5)).toBe('V');
    expect(projects.convertToRoman(9)).toBe('IX');
    expect(projects.convertToRoman(12)).toBe('XII');
    expect(projects.convertToRoman(16)).toBe('XVI');
    expect(projects.convertToRoman(29)).toBe('XXIX');
    expect(projects.convertToRoman(44)).toBe('XLIV');
    expect(projects.convertToRoman(45)).toBe('XLV');
    expect(projects.convertToRoman(68)).toBe('LXVIII');
    expect(projects.convertToRoman(83)).toBe('LXXXIII');
    expect(projects.convertToRoman(97)).toBe('XCVII');
    expect(projects.convertToRoman(99)).toBe('XCIX');
    expect(projects.convertToRoman(400)).toBe('CD');
    expect(projects.convertToRoman(500)).toBe('D');
    expect(projects.convertToRoman(501)).toBe('DI');
    expect(projects.convertToRoman(649)).toBe('DCXLIX');
    expect(projects.convertToRoman(798)).toBe('DCCXCVIII');
    expect(projects.convertToRoman(891)).toBe('DCCCXCI');
    expect(projects.convertToRoman(1000)).toBe('M');
    expect(projects.convertToRoman(1004)).toBe('MIV');
    expect(projects.convertToRoman(1006)).toBe('MVI');
    expect(projects.convertToRoman(1023)).toBe('MXXIII');
    expect(projects.convertToRoman(2014)).toBe('MMXIV');
    expect(projects.convertToRoman(3999)).toBe('MMMCMXCIX');
    expect(() => projects.convertToRoman(0)).toThrow(RangeError);
    expect(() => projects.convertToRoman(4000)).toThrow(RangeError);
    expect(() => projects.convertToRoman('111')).toThrow(TypeError);
});


test('rot13: decodes caesar ciphers', () => {
    expect(projects.rot13("SERR PBQR PNZC")).toBe('FREE CODE CAMP');
    expect(projects.rot13("SERR CVMMN!")).toBe('FREE PIZZA!');
    expect(projects.rot13("SERR YBIR?")).toBe('FREE LOVE?');
    expect(projects.rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")).toBe('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');
    expect(() => projects.rot13(['SERR', 'CVMMN!'])).toThrow(TypeError);
    expect(() => projects.rot13('SERR pbr PNZC')).toThrow(RangeError);
});


test('telephoneCheck: tests if string is valid u.s. phone number', () => {
    expect(typeof projects.telephoneCheck("555-555-5555")).toBe('boolean');
    expect(projects.telephoneCheck("1 555-555-5555")).toBe(true);
    expect(projects.telephoneCheck("1 (555) 555-5555")).toBe(true);
    expect(projects.telephoneCheck("5555555555")).toBe(true);
    expect(projects.telephoneCheck("555-555-5555")).toBe(true);
    expect(projects.telephoneCheck("(555)555-5555")).toBe(true);
    expect(projects.telephoneCheck("1(555)555-5555")).toBe(true);
    expect(projects.telephoneCheck("555-5555")).toBe(false);
    expect(projects.telephoneCheck("5555555")).toBe(false);
    expect(projects.telephoneCheck("1 555)555-5555")).toBe(false);
    expect(projects.telephoneCheck("1 555 555 5555")).toBe(true);
    expect(projects.telephoneCheck("1 456 789 4444")).toBe(true);
    expect(projects.telephoneCheck("123**&!!asdf#")).toBe(false);
    expect(projects.telephoneCheck("55555555")).toBe(false);
    expect(projects.telephoneCheck("(6054756961)")).toBe(false);
    expect(projects.telephoneCheck("2 (757) 622-7382")).toBe(false);
    expect(projects.telephoneCheck("0 (757) 622-7382")).toBe(false);
    expect(projects.telephoneCheck("-1 (757) 622-7382")).toBe(false);
    expect(projects.telephoneCheck("2 757 622-7382")).toBe(false);
    expect(projects.telephoneCheck("10 (757) 622-7382")).toBe(false);
    expect(projects.telephoneCheck("27576227382")).toBe(false);
    expect(projects.telephoneCheck("(275)76227382")).toBe(false);
    expect(projects.telephoneCheck("2(757)6227382")).toBe(false);
    expect(projects.telephoneCheck("2(757)622-7382")).toBe(false);
    expect(projects.telephoneCheck("555)-555-5555")).toBe(false);
    expect(projects.telephoneCheck("(555-555-5555")).toBe(false);
    expect(projects.telephoneCheck("(555)5(55?)-5555")).toBe(false);
    expect(projects.telephoneCheck("55 55-55-555-5")).toBe(false);
    expect(() => projects.telephoneCheck(15555555555)).toThrow(TypeError);
});


test('checkCashRegister: simple cash register', () => {
    let cashDrawer = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];
    expect(typeof projects.checkCashRegister(19.5, 20, cashDrawer)).toBe('object');

    cashDrawer = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];
    let testReturn = {status: "OPEN", change: [["QUARTER", 0.5]]};
    expect(projects.checkCashRegister(19.5, 20, cashDrawer)).toEqual(testReturn);
    
    cashDrawer = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];
    testReturn = {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]};
    expect(projects.checkCashRegister(3.26, 100, cashDrawer)).toEqual(testReturn);

    cashDrawer = [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
    testReturn = {status: "INSUFFICIENT_FUNDS", change: []};
    expect(projects.checkCashRegister(19.5, 20, cashDrawer)).toEqual(testReturn);

    cashDrawer = [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
    testReturn = {status: "INSUFFICIENT_FUNDS", change: []};
    expect(projects.checkCashRegister(19.5, 20, cashDrawer)).toEqual(testReturn);

    cashDrawer = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
    testReturn = {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]};
    expect(projects.checkCashRegister(19.5, 20, cashDrawer)).toEqual(testReturn);

    cashDrawer = [["PENNY", 0.5], ["NICKEL", 1.05], ["DIME", 0.9], ["QUARTER", 3.25], ["ONE", 32], ["FIVE", 45], ["TEN", 40], ["TWENTY", 160], ["ONE HUNDRED", 100]];
    expect(() => projects.checkCashRegister('40', 60, cashDrawer)).toThrow(TypeError);

    cashDrawer = [["PENNY", 0.5], ["NICKEL", 1.05], ["DIME", 0.9], ["QUARTER", 3.25], ["ONE", 32], ["FIVE", 45], ["TEN", 40], ["TWENTY", 160], ["ONE HUNDRED", 100]];
    expect(() => projects.checkCashRegister(40, '60', cashDrawer)).toThrow(TypeError);

    cashDrawer = [["PENNY", 0.5], ["NICKEL", 1.05], ["DIME", 0.9], ["QUARTER", 3.25], ["ONE", 32], ["FIVE", 45], ["TEN", 40], ["TWENTY", 160], ["ONE HUNDRED", 100]];
    expect(() => projects.checkCashRegister(-.01, 60, cashDrawer)).toThrow(RangeError);

    cashDrawer = [["PENNY", 0.5], ["NICKEL", 1.05], ["DIME", 0.9], ["QUARTER", 3.25], ["ONE", 32], ["FIVE", 45], ["TEN", 40], ["TWENTY", 160], ["ONE HUNDRED", 100]];
    expect(() => projects.checkCashRegister(40, -.01, cashDrawer)).toThrow(RangeError);

    cashDrawer = [["PENNY", 0.5], ["NICKEL", 1.05], ["DIME", 0.9], ["QUARTER", 3.25], ["ONE", 32], ["FIVE", 45], ["TEN", 40], ["TWENTY", 160]];
    expect(() => projects.checkCashRegister(40, 60, cashDrawer)).toThrow(SyntaxError);

    cashDrawer = [["PENNY", 0.5], ["NICKEL", 1.05], ["DIME", 0.9], ["QUARTER", 3.25], ["ONE", 32], ["5", 45], ["TEN", 40], ["TWENTY", 160], ["ONE HUNDRED", 100]];
    expect(() => projects.checkCashRegister(40, 60, cashDrawer)).toThrow(SyntaxError);

    cashDrawer = [["PENNY", 0.5], ["NICKEL", 1.05], ["DIME", -0.1], ["QUARTER", 3.25], ["ONE", 32], ["FIVE", 45], ["TEN", 40], ["TWENTY", 160], ["ONE HUNDRED", 100]];
    expect(() => projects.checkCashRegister(40, 60, cashDrawer)).toThrow(SyntaxError);

    cashDrawer = {"PENNY": 0.5, "NICKEL": 1.05, "DIME": 1.50, "QUARTER": 3.25, "ONE": 32, "FIVE": 45, "TEN": 40, "TWENTY": 160, "ONE HUNDRED": 100};
    expect(() => projects.checkCashRegister(40, 60, cashDrawer)).toThrow(SyntaxError);

    cashDrawer = [{"PENNY": 0.5}, {"NICKEL": 1.05}, {"DIME": 2.1}, {"QUARTER": 3.25}, {"ONE": 32}, {"FIVE": 45}, {"TEN": 40}, {"TWENTY": 160}, {"ONE HUNDRED": 100}];
    expect(() => projects.checkCashRegister(40, 60, cashDrawer)).toThrow(SyntaxError);

    cashDrawer = [["PENNY", 0.5], ["NICKEL", 1.05], ["DIME", 2.1], ["QUARTER", 3.25], ["ONE", 32], ["FIVE", 45], ["TEN", 40], ["TWENTY", 160], ["ONE HUNDRED", 100, 'Benjamin Franklin']];
    expect(() => projects.checkCashRegister(40, 60, cashDrawer)).toThrow(SyntaxError);

    cashDrawer = undefined;
    expect(() => projects.checkCashRegister(40, 60, cashDrawer)).toThrow(SyntaxError);
    
});