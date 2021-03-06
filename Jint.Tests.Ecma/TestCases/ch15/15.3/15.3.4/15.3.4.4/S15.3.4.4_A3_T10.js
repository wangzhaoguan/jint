// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * If thisArg is null or undefined, the called function is passed the global object as the this value
 *
 * @path ch15/15.3/15.3.4/15.3.4.4/S15.3.4.4_A3_T10.js
 * @description Checking by using eval, no any arguments at call function
 */

eval(" (function(){this.feat=1}).call()");

//CHECK#1
if (this["feat"] !== 1) {
  $ERROR('#1: If thisArg is null or undefined, the called function is passed the global object as the this value');
}

