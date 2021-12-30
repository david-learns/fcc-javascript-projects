'use strict';
/**
 * javascript algorithms from freeCodeCamp's "JavaScript Algorithms and Data
 * Structures" curriculum. Below is the final course "JavaScript Algorithms
 * and Data Structures Projects"
 * 
 */


/**
 * Palindrome Checker
 * 
 * tests for palindrome in alphnumeric characters only, regardless of
 * punctuation, case, and spacing. throws type error is argument is not of type
 * string.
 * 
 * @param {string} str of which to test palindrome-ness
 * @returns true if palindrome; otherwise, false
 */
function palindrome(str) {

    if (typeof str !== 'string') {
        throw new TypeError;
    }

    let alphaNumStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    for (let i = 0, l = alphaNumStr.length - 1; i < Math.trunc(alphaNumStr.length / 2); i++, l--) {
        if (alphaNumStr.charAt(i) !== alphaNumStr.charAt(l)) {
            return false;
        }   
    }
    return true;
}


/**
 * Roman Numeral Converter
 * 
 * returns string roman numeral for any number from 0 to 4000 (exclusive).
 * throws range error if argument is zero or less or 4000 and above. throws
 * type error if argument is not number
 * 
 * @param {number} num < 4000 and num > 0
 * @returns string roman numeral
 */
function convertToRoman(num) {

    if (num < 1 || num > 3999) {
        throw new RangeError;
    } else if (typeof num !== 'number') {
        throw new TypeError;
    }
    
    const romans = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M',
    }

    const romansArr = [];

    for (let i = num, place = 1; i > 0; i = Math.trunc(i / 10), place *= 10) {
        
        const digit = i % 10;
        switch (digit) {
            case 1:
            case 2:
            case 3: romansArr.unshift(romans[place].repeat(digit)); break;
            case 4: romansArr.unshift(romans[place * 1] + romans[place * 5]); break;
            case 5: romansArr.unshift(romans[place * digit]); break;
            case 6:
            case 7:
            case 8: romansArr.unshift(romans[place * 5] + romans[place * 1].repeat(digit - 5)); break;
            case 9: romansArr.unshift(romans[place * 1] + romans[place * 10]); break;
        }
    }

    return romansArr.join('');
}


/**
 * Caesars Cipher
 * 
 * takes a ROT13 encoded string and decodes upper-case alphabetic characters
 * only. will throw error if argument is not string or if the encoded string
 * contains lower-case alphabetic characters.
 * 
 * @param {string} str to be decoded
 * @returns decoded string
 */
function rot13(str) {

    if (typeof str !== 'string') {
        throw new TypeError;
    } else if (str.match(/[a-z]/)) {
        throw new RangeError;
    }

    const decodeArr = [];
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).match(/[A-Z]/)) {
            const rotate = (str.codePointAt(i) - 64) / 13 > 1 ? -13 : 13;
            decodeArr.push(String.fromCodePoint(str.codePointAt(i) + rotate));
        } else {
            decodeArr.push(str.charAt(i));
        }
    }
    return decodeArr.join('');
}


/**
 * Telephone Number Validator
 * 
 * provide string u.s. phone number and will test for validity. there may be
 * other valid patterns which would return false, but this is the minimum
 * necessary to complete the project (pass the on-screen tests).
 * 
 * @param {string} str to test for phone number pattern
 * @returns true if matches specified patter; otherwise, false
 */
function telephoneCheck(str) {

    if (typeof str !== 'string') {
        throw new TypeError;
    }

    return new RegExp(/^1?(?:\s*\(\s*[0-9]{3}\s*\)\s*|\s*\-?\s*[0-9]{3}\s*\-?\s*)[0-9]{3}\s*\-?\s*[0-9]{4}$/).test(str);

}


/**
 * Cash Register
 * 
 * performs a single cash register exchange. cid parameter must be of the
 * following format where numerical amounts may differ. if the drawer does not
 * have a denomination it should still be included with zero at index one.
 * [
 *   ["PENNY", 1.01],
 *   ["NICKEL", 2.05],
 *   ["DIME", 3.1],
 *   ["QUARTER", 4.25],
 *   ["ONE", 90],
 *   ["FIVE", 55],
 *   ["TEN", 20],
 *   ["TWENTY", 60],
 *   ["ONE HUNDRED", 100]
 * ]
 * 
 * @param {number} price price of thing in standard u.s. currency format
 * @param {number} cash cash paid for thing in standard u.s. currency format
 * @param {array} cid a 2d array of cash denominations in drawer
 * @returns object with keys status and a change array
 */
function checkCashRegister(price, cash, cid) {

    if (typeof price !== 'number' || typeof cash !== 'number') {
        throw new TypeError;
    } else if (price < 0 || cash < 0) {
        throw new RangeError;
    } else if (invalidateCid(cid)) {
        throw new SyntaxError('format of 2d array is invalid');
    }

    const value = {
        'PENNY': .01,
        'NICKEL': .05,
        'DIME': .10,
        'QUARTER': .25,
        'ONE': 1,
        'FIVE': 5,
        'TEN': 10,
        'TWENTY': 20,
        'ONE HUNDRED': 100
    }
    
    let cidTotal = Number.parseFloat(cid.reduce((p, c) => p + c[1], 0).toFixed(2));
    let change = Number.parseFloat((cash - price).toFixed(2));
    let remaining = Number.parseFloat((cidTotal - change).toFixed(2));
    let status = (change > cidTotal) ? 'INSUFFICIENT_FUNDS' : (remaining < .01) ? 'CLOSED' : 'OPEN';
    let changeArr = getChange(change);
    return (status === 'CLOSED') ? { status, change: changeArr.reverse() } : { status, change: changeArr };

    function invalidateCid(cid) {
        const keysArr = ['PENNY','NICKEL','DIME','QUARTER','ONE','FIVE','TEN','TWENTY','ONE HUNDRED'];
        if (cid.length !== keysArr.length || !Array.isArray(cid)) return true;
        for (let i = 0; i < cid.length; i++) {
            if (cid[i][0] !== keysArr[i] || cid[i][1] < 0) {
                return true;
            }            
        }
        return false;
    }

    function getChange(change) {
        let totalChange = 0;
        const changeArr = [];
        cid.reverse();
        cid.forEach(e => {
            let amount = 0;
            while (Number.parseFloat((change / value[e[0]]).toFixed(2)) >= 1 && e[1] > 0) {
                change -= Number.parseFloat(value[e[0]].toFixed(2));
                e[1] -= Number.parseFloat(value[e[0]].toFixed(2));
                amount += Number.parseFloat(value[e[0]].toFixed(2));
                totalChange += Number.parseFloat(value[e[0]].toFixed(2));
            }
            if (amount > 0 || status === 'CLOSED') {
                changeArr.push([e[0], Number.parseFloat(amount.toFixed(2))]);
            }
        });
        if (totalChange < change) {
            status = 'INSUFFICIENT_FUNDS';
            return [];
        } else {
            return changeArr;
        }
    }

}








module.exports = {
    palindrome,
    convertToRoman,
    rot13,
    telephoneCheck,
    checkCashRegister,
}