'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: It returns <value> unchanged.
 * 
 * @param {Value} value: Any value passed as argument. 
*/

function identity (value){
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: It returns the type of <value> as a string.
 * 
 * @param {Value} value: Any value passed as argument. 
*/

function typeOf(value){
    if(Array.isArray(value)){
        return "array";
    } else if(value === null) {
        return "null";
    }else if(typeof value === "number"){
        return "number";
    }else if( typeof value === "string"){
        return "string";
    } else if(typeof value === "object"){
        return "object";
    } else if(typeof value === "function"){
        return "function";
    } else if(value === undefined){
        return "undefined";
    } else if(typeof value === "boolean"){
        return "boolean";
    } 
}
module.exports.typeOf = typeOf;


/**
 * first: It loops over the <array> and return items till the index which is <number> argument.
 * If <number> is not given or not a number, return just the first element in <array>.
 * 
 * @param {Array} array: The array first <number> elements of which the function returns. 
 * @param {Number} number:Second argument is supposed to be number but even <number> is not passed
 * or another datatype is passed as parameter, first() would return first item of the given array.
*/

function first(arr, num){
    var newArr = [];
    if(!Array.isArray(arr)){
        return [];
    }
    if(num === undefined || typeof num !== "number"){
        return arr[0];
    } else if (num > arr.length){
        return arr;
    } else {
        for(var i = 0; i < num; i++){
            newArr.push(arr[i]);
        }
    } return newArr;
}
module.exports.first = first;

/** 
 * last: It loops over the array and return the given numbers items from the last of the array.
 * If <array> is not an array, it returns []. er> is not given or not a number, return just
 * the last element in <array>.
*
* @param {Array} array: The array last <number> elements of which the function returns. 
* @param {Number} number:Second argument is supposed to be number but even <number> is not passed
* or another datatype is passed as parameter, last() would return last item of the given array.
*/

function last (arr, num){
  var newArray = [];
    if(!Array.isArray(arr)){
        return [];
    } 
    if (num === undefined || typeof num !== 'number' ){
        return arr[arr.length - 1];
    } else if (num > arr.length) {
       return arr;
    } else {
       for (var i = arr.length - num; i < arr.length; i++){
           newArray.push(arr[i]);
       }
    } return newArray;
}
module.exports.last = last;

/** 
 * indexOf: Designed to loop over an array and return the index of <array>
 * that is the first occurrance of <value>. It returns -1 if <value> is not in <array>.
 * 
 * @param {Array} array: The array elements of which would be compare with the value.
 * @param {Value} value: Any value to be compared with the array elements.
*/

function indexOf(arr, value){
    var indexes = [];
    for(var i = 0; i < arr.length; i++){
        if (arr[i] === value){
            indexes.push(i);
        } 
    } 
    if(indexes.length > 0){
        return indexes[0];
    } else {
        return -1;
    }
}
module.exports.indexOf = indexOf;

/** 
 * contains: Designed to loop over an array and compare the array elements
 * with a value. It returns true if the array contains the value.
 * Return false otherwise.
 *
 * @param {Array} array: The array elements of which would be compare with the value.
 * @param {Value} value: Any value to compare the array elements.
*/

function contains(Array, value){
    var input = indexOf(Array, value);
    return true ? input >= 0 : false;
}
module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/** 
 * unique :It returns a new array of all elements from <array> with duplicates removed.
 * 
 * @param {Array} array: The array over which to iterate.
*/


function unique (arr){
    var nonDublicate = [];
    for(var i = 0; i < arr.length; i++){
      if(contains(nonDublicate, arr[i])){
          nonDublicate.push(arr[i]);
      }
    }
  return nonDublicate;
}
module.exports.unique = unique;

/**
 * filter: filter calls <function> for each element in <array> passing the arguments:the element, it's index, <array>
 * It returns a new array of elements for which calling <function> returned true.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the the array.
*/

function filter (arr, func){
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
      if(func(arr[i], i, arr)){
          newArr.push(arr[i]);
      }
  } return newArr;
}
module.exports.filter = filter;

/**
 * reject: It calls <function> for each element in <array> passing the arguments:
 * the element, it's index, <array>. It returns a new array of elements for which calling
 * <function> returned false This is the logical inverse of filter()
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the the array.
 * 
*/

function reject (arr, func){
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
      if(!func(arr[i], i, arr)){
          newArr.push(arr[i]);
      }
  } return newArr;
  
};
module.exports.reject = reject;

/**
 * partition: It calls <function> for each element in <array> passing it the arguments:
* element, key, <array>. It returns an array that is made up of 2 sub arrays:
* 0) An array that contains all the values for which <function> returned something truthy.
* 1) An array that contains all the values for which <function> returned something falsy.
*
* @param {Array} array: The array over which to iterate.
* @param {Function} action: The Function to be applied to each value in the the array.
*/

 function partition (arr, func){
     var output = [[],[]];
     for(var i = 0; i < arr.length; i++){
         if(func(arr[i], i, arr)){
            output[0].push(arr[i]);
         } else {
              output[1].push(arr[i]);
         }
     } 
     return output;
 }
 module.exports.partition = partition;

/**
 * map: It calls <function> for each element in <collection> passing the arguments:
 * -if <collection> is an array: the element, it's index, <collection>
 * -if <collection> is an object:the value, it's key, <collection>
*  Then, it saves the return value of each <function> call in a new array
*  Finallly, it returns the new array.
* 
*  @param {Array or Object} collection: The collection over which to iterate.
*  @param {Function} action: The function applied to each element in the given collection.
*/

function map (c, func){
    var arrNew = [];
    if(Array.isArray(c)){
        for (var i = 0; i < c.length; i++){
           arrNew[i] = func(c[i], i, c);
        }
    } else {
        var counter = 0;
        for(var p in c){
            arrNew[counter] = func(c[p], p, c);
            counter++;
        }
    } return arrNew;
}
 module.exports.map = map;


/**
 * pluck: It returns an array containing the value of <property> for every element in <array>
* 
*  @param {Array} array: The array of objects over which to iterate.
*  @param {Property} property:
*
*/

function pluck (arr, prop){
    var output = [];
    for(var i = 0; i < arr.length; i++){
        
            output.push(arr[i][prop]);
    } return output;
}
module.exports.pluck = pluck;

/**
 * every: It calls <function> for every element of <collection> with the paramaters:
 * if <collection> is an array: current element, it's index, <collection>
 * if <collection> is an object: current value, current key, <collection>.
 * If the return value of calling <function> for every element is true, it returns true.
 * If even one of them returns false, it returns false.
 * If <function> is not provided, return true if every element is truthy, otherwise it returns false.
 * 
 * @param {Collection} array pr object: The array or object over which to iterate.
 * @param {function} action: Function is called for each element in the collection.
**/

function every (coll,func){
    var results = [];
    var falsy = [false, null, undefined, NaN, 0, -0, ""];
    if (typeof func !== "function"){
       let counter = 0;
       for(let i = 0; i < coll.length; i++){
           for(let j = 0; j < coll.length; j++){
               if(coll[i] === falsy[j]){            
                   counter++;
               }
           }
        } if(counter > 1){
            return false;
            } else {
                return true;
            }
   } else {
       if(Array.isArray(coll)){
           for (var i = 0; i < coll.length; i++){
               results[i] = func(coll[i], i, coll);
            }   
        } else {
            let k =0;
            for(var prop in coll){
                results[k] = func(coll[prop], prop, coll);
                k++;
            }
        }
       if(results.length > 0){
           if (contains(results, false)){           
               results = false;
           } else {
               results = true;
           }
           
       } else {
           results = false;
       }
   }
    return results;
}
module.exports.every = every;

/**
 * some: It calls <function> for every element of <collection> with the paramaters:
 * if <collection> is an array: current element, it's index, <collection>
 * if <collection> is an object: current value, current key, <collection>.
 * If the return value of calling <function> is true for at least one element, it returns true.
 * If it is false for all elements, it returns false
 * If <function> is not provided return true if at least one element is truthy, otherwise it returns false
 * 
 * @param {Collection} array pr object: The array or object over which to iterate.
 * @param {function} action: Function is called for each element in the collection.
**/

function some (coll,func){
    var results = [];
    var falsy = [false, null, undefined, NaN, 0, -0, ""];
   
   if (typeof func !== "function"){
       let counter = 0;
      for(let i = 0; i < coll.length; i++){
               if(contains(falsy, coll[i])){
                   counter++;
               }
        } if(counter>0){                                          
            return false;                                        
            } else {
            return true;                                          
            }
  }
   else {
       if(Array.isArray(coll)){
           for (var i = 0; i < coll.length; i++){
               results[i] = func(coll[i], i, coll);
            }   
        } else {
            let k =0;
            for(var prop in coll){
                results[k] = func(coll[prop], prop, coll);
                k++;
            }
        }
       if(results.length > 0){
           if ( contains(results, true)){
               results = true;
           } else {
               results = false;
           }
           
       } else {
           results = false;
       }
   }
    return results;
}
module.exports.some = some;


/**
* reduce: reduce calls <function> for every element in <collection> passing the arguments:
* previous result, element, index
* It uses the return value of <function> as the "previous result" for the next iteration.
* On the very first iteration, it uses <seed> as the "previous result"
* If no <seed> was given, it use the first element/value of <collection> as <seed> and continue to the next element
* The first element is the seed and we assigned it as previous result. We don't pass it into the function
* like func(arr[i], arr[i], i);
* After the last iteration, it returns the return value of the final <function> call
* 
*  @param {Array} array: The array of objects over which to iterate.
*  @param {Function} action: Function into which we pass elements of array.
*  @param {Seed} number: Initial value we put into the function.
**/

function reduce (arr, func, s){
   var pR;
   var output;
        if(typeOf(s) === "number"){
            for(let i = 0; i < arr.length; i++){ 
                s = func(s, arr[i], i);
            }
            output = s;
        }else{
            for(let i = 0; i < arr.length; i++){
                if(i === 0){
                    pR = arr[i];                        
                }else {                                  
                    pR = func(pR, arr[i], i); 
                }
            } output = pR;
        } return output;
   }
   module.exports.reduce = reduce;

/**
 * extend:It copies properties from <object 2> to <object 1>.
 * If more objects are passed in, it copies their properties to <object 1> as well, in the order they are passed in.
 * It eturns the update <object 1>
 * 
 *@param {Object} object: It copies properties from <object 2> to <object 1>.
 */

function extend (){
for(var i =0; i < arguments.length-1; i++){
        var tempKeys = Object.keys(arguments[i+1]);
        var tempValues = Object.values(arguments[i+1]);
        for(var j = 0; j < tempKeys.length; j++){
            arguments[0][tempKeys[j]] = tempValues[j];
         }
}return arguments[0];
}
module.exports.extend = extend;



