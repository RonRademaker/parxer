'use strict';

var Core = require('../core');
var _ = require('lodash');
var getAttr = require('../attr').getAttr;

module.exports = function(handler) {

  var parsedAttribs = ['cms-tag'];


  return {
    name:'cms',
    match: _.noop,
    parsedAttribs: _.noop
  };
};
