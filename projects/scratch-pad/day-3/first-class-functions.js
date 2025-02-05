// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
   return function (value){
      return value > base;
   };
   

// givin an input base which can be a "string" or a number 
//return a function tht tests whether a givin value is greater than base
//     var x = function j(){
//         if (base < 21) {
//             return true; 
//         }
//       else {return false
// };
    

}

    
    
    // YOUR CODE ABOVE HERE //


/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //givin an input base which could be a string or number
    //return a function that tests whether a givin value is lesss than the base 
    return function (value){
        return value < base;
    };
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // givin an imput of startsWith, which will be a single character 
    //return a function that tests whether a givin string startsWith character
    return function (string){
        if(string[0].toLowerCase() === startsWith.toLowerCase()){
            return true;
            
        }
        return false;
    }
    
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    // givin an endsWith character, which will be a single character
    //return a function that test whther a given string endWith character
    return function (string){
        if(string[string.length -1].toLowerCase() === endsWith.toLowerCase()){
            return true;
            
        }
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //givin an array of strings and a function designed to modify a string
    //return an array of the strings modified
    var newArr = [];
    for(var i = 0; i < strings.length; i++){
        newArr.push(modify(strings[i]))
    }
    
    return newArr;
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    for(var i = 0; i < strings.length; i++){
    var array = [];
        if( test(strings[i]) === true){
            array.push(1);
            
        }

        if(array.length === strings.length){
            return true;
        }
        
    }
    return false;
    
    
    
    
    // YOUR CODE ABOVE HERE //
}
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}