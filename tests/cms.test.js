'use strict';

var expect = require('expect.js');
var parxer = require('..').parxer;
var cheerio = require('cheerio');
var fs = require('fs');

describe("CMS plugin tests", function () {

  it('should parse cms tag attributes and call the handler', function (done) {
    var input = "<html><head><meta cx-cms-tag='international-home-page'></head></html>";
    var called = false;
    parxer({
      plugins: [
        require('../Plugins').CMS(function (fragment, next) {
          console.log(fragment); // should be international-home-page
          called = true;
          next(null, { headline: 'value' });
        })
      ],
      cdn: {
        url: 'http://base.url.com/'
      },
      environment: 'test',
      variables: {
        'server:name': 'http://www.google.com'
      }
    }, input, function (err, fragmentCount, data) {
      var $ = cheerio.load(data);
      expect($('head').children().length).to.be(0);
      expect(called).to.be.true;
      done();
    });
  });
});
