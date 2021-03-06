'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var UNITS = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
/*
Formats the given number using `Number#toLocaleString`.
- If locale is a string, the value is expected to be a locale-key (for example: `de`).
- If locale is true, the system default locale is used for translation.
- If no value for locale is specified, the number is returned unmodified.
*/

var toLocaleString = function toLocaleString(number, locale) {
  var result = number;

  if (typeof locale === 'string') {
    result = number.toLocaleString(locale);
  } else if (locale === true) {
    result = number.toLocaleString();
  }

  return result;
};

module.exports = function (number, options) {
  if (!Number.isFinite(number)) {
    throw new TypeError("Expected a finite number, got ".concat(_typeof(number), ": ").concat(number));
  }

  options = Object.assign({}, options);

  if (options.signed && number === 0) {
    return ' 0 B';
  }

  var isNegative = number < 0;
  var prefix = isNegative ? '-' : options.signed ? '+' : '';

  if (isNegative) {
    number = -number;
  }

  if (number < 1) {
    var _numberString = toLocaleString(number, options.locale);

    return prefix + _numberString + ' B';
  }

  var exponent = Math.min(Math.floor(Math.log10(number) / 3), UNITS.length - 1);
  number = Number((number / Math.pow(1000, exponent)).toPrecision(3));
  var numberString = toLocaleString(number, options.locale);
  var unit = UNITS[exponent];
  return prefix + numberString + ' ' + unit;
};