function getRandomizator(a, b) {
    return () => {
        return Math.random() * (b-a) + a;
    }
}

let random10 = getRandomizator(0, 10);

console.log(random10());
