"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (candidate) {
  var digits = extract(candidate);
  while (digits.length > 1) {
    var first = digits.shift();
    var last = digits.pop();
    if (first !== last) return false;
  }
  return true;
};

function extract(num) {
  var digits = [];
  var total = num;
  while (total > 0) {
    var digit = total % 10;
    total = Math.floor(total / 10);
    digits.push(digit);
  }
  return digits;
}
module.exports = exports["default"];