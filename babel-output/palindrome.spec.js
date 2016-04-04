'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _palindrome = require('./palindrome');

var _palindrome2 = _interopRequireDefault(_palindrome);

describe('Palindrome', function () {

  it('works with integers', function () {
    expect((0, _palindrome2['default'])(323)).toEqual(true);
  });

  it('works with integers', function () {
    expect((0, _palindrome2['default'])(332)).toEqual(false);
  });
});