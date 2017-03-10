function getPolynomyal(...arg) {


    let len = arg.length - 1;
    let res = arg.reduce((prev, cur, ind) => {

        let step = len - ind;

        if (!cur) {
            return prev;
        }
        if (cur === 1 || cur === -1) {
            return `${prev}${cur<0 ? '-' : '+'}x${(step!==1) ? `^${step}` : ''}`;
        }
        if (!step) {
            return `${prev}${cur<0 ? '-' : '+'}${cur !== 1 ? cur : ''}`;
        }

       return `${prev}${cur<0 ? '-' : '+'}${cur ? `${cur}*x` : ''}${(step!==1) ? `^${step}` : ''}`;

    }, '');

    return res === '' ? '0' : res.slice(1);
}


console.log( getPolynomyal(0));
console.log( getPolynomyal(1, 0, 0));
console.log( getPolynomyal(-2, 3));
console.log( getPolynomyal(8, 3.5, -1, 0, 12));
console.log( getPolynomyal());



