const obj1 = {
  entries: { first: 'hi!', second: 'bye!' },
  currentKey: 'second',
  getCurrentEntry: function () {
    return this.entries[this.currentKey];
  }
}

const obj2 = {}

// fill in the blanks to pass the asserts:

const obj1current1 = obj1.entries.second;
console.assert(obj1current1 === 'bye!', 'Test 1');

const obj2current1 = __;
console.assert(obj2current1 === 'bye!', 'Test 2');

obj1.currentKey = 'hi!';
obj2.currentKey = 'hi!';

const obj1current2 = obj1.currentKey;
console.assert(obj1current2 === 'hi!', 'Test 3');

const obj2current2 = obj2.currentKey;
console.assert(obj2current2 === 'hi!', 'Test 4');
