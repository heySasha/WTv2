let even = new Set([0, 2, 3, 4, 6, 8]);
let odd = new Set([1, 3, 5, 7, 9]);

Set.prototype.union = function (that) {
    let result = new Set();
    for (let item of this) {
        result.add(item);
    }
    for (let item of that) {
        result.add(item);
    }
    return result;
};

Set.prototype.difference = function (that) {
    let result = new Set();
    for (let item of this) {
        if (!that.has(item)) {
            result.add(item);
        }
    }
    return result;
};

Set.prototype.intersection = function (that) {
    let result = new Set();
    for (let item of this) {
        if (that.has(item)) {
            result.add(item);
        }
    }
    return result;
};

Set.prototype.symmetricDifference = function (that) {
    let result = new Set();
    for (let item of this) {
        if (!this.has(item)) {
            result.add(item);
        }
    }
    for (let item of that) {
        if (!this.has(item)) {
            result.add(item);
        }
    }
    return result;
};

Set.prototype.isSuperset = function (that) {
    for (let item of that) {
        if (!this.has(item)) {
            return false;
        }
    }
    return true;
};

Set.prototype.isSubset = function (that) {
    return that.isSuperset(this);
};

let numbers = odd.union(even);
console.log(numbers.size);

let newOdds = numbers.difference(even);
let newOdds2 = odd.difference(even);
let emptySet = even.difference(even);

console.log('newOdds:', newOdds);
console.log('newOdds2', newOdds2);
console.log('emptySet', emptySet);

let triplets = new Set([0, 3, 6, 9]);


console.log('numbers is superset to odd:', numbers.intersection(odd));
console.log('numbers is superset to even:', numbers.intersection(even));

console.log('odd is subset numbers:', odd.isSubset(numbers));
console.log('even is subset numbers:', odd.isSubset(numbers));

console.log(':', );
console.log(':', );