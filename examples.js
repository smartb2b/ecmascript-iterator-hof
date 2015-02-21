"use strict";

require('./polyfill-spec');

(function () {
  // Iterator can be mapped
  var mapped = ['A', 'B', 'C'].values().map(function (x) {
    return x + x;
  });
  console.log(mapped.next());
  console.log(mapped.next());
  console.log(mapped.next());
  console.log(mapped.next());
  console.log(mapped.next());
})();

(function () {
  // Iterators can be zipped
  var a1 = ['A', 'B', 'C'];
  var a2 = ['X', 'Y', 'Z'];
  var zipped = a1.values().zip(a2);
  console.log(zipped.next());
  console.log(zipped.next());
  console.log(zipped.next());
  console.log(zipped.next());
  console.log(zipped.next());
})();

(function () {
  // Transformed iterators can be reversed
  var revMapped = ['A', 'B', 'C'].values().map(function (x) {
    return x + x;
  }).reverse();
  console.log(revMapped.next());
  console.log(revMapped.next());
  console.log(revMapped.next());
  console.log(revMapped.next());
  console.log(revMapped.next());
})();

(function () {
  // Iterators can be reduced
  var reduced = ['A', 'B', 'C'].values().reduce(function(x, y) {
    return x + y;
  });
  console.log(reduced);
})();

(function () {
  // Reversable iterators can use reduceRight
  var reduced = ['A', 'B', 'C'].values().reduceRight(function(x, y) {
    return x + y;
  });
  console.log(reduced);
})();


(function () {
  // Iterators can be use some
  var some = ['A', 'B', 'C'].values().some(function(x) {
    console.log('some testing', x);
    return x === 'B';
  });
  console.log(some);

  var some2 = ['A', 'B', 'C'].values().some(function(x) {
    console.log('some testing', x);
    return x === 'D';
  });
  console.log(some2);
})();

(function () {
  // iterators can use every
  var every = ['A', 'B', 'C'].values().every(function(x) {
    console.log('every testing', x);
    return x === 'B';
  });
  console.log(every);

  var every2 = ['A', 'B', 'C'].values().every(function(x) {
    console.log('every testing', x);
    return x !== 'D';
  });
  console.log(every2);
})();