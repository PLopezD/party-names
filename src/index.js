import uniqueRandomArray from 'unique-random-array';
import partyNames from './party-names.json';

const getRandomItem = uniqueRandomArray(partyNames);

module.exports = {
  all: partyNames,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    const randomItems = [];
    for (let i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
