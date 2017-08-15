import {expect} from 'chai';
import partyNames from './index';

describe('partyNames', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(partyNames.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain `Luke Skywalker`', function() {
      expect(partyNames.all).to.include('80s');
    });
  });

  describe('random', function() {
    it('should return a random item from the partyNames.all', function() {
      var randomItem = partyNames.random();
      expect(partyNames.all).to.include(randomItem);
    });

    it('should return an array of random items if passed a number', function() {
      var randomItems = partyNames.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(partyNames.all).to.include(item);
      });
    });
  });
});
