function generateCounter(n) {

    function counter() {
        counter.count += n;
        return counter.count
    }
    counter.count = -n;

    return counter;

}

let i = generateCounter(2);
console.log(i());
console.log(i());
console.log(i());

let j = generateCounter(3);
console.log(j());
console.log(j());
console.log(j());