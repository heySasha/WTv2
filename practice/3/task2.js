function getItemPolynomial(prev, cur, ind, arr) {

    let step = arr.length - ind - 1;

    let koef, stepView; // біля x

    if (!cur) {
        return prev;
    } else if (cur < 0) {
        if (cur === -1) {
            koef = '-';
        } else {
            koef = +cur;
        }
    } else {
        if (cur === 1) {
            koef = '+';
        } else {
            koef = `+${cur}`;
        }
    }



    if (!step) {
        stepView = '';
    } else if (step === 1) {
        stepView = 'x';
    } else {
        stepView = `x^${step}`;
    }

    //return `${prev}${cur<0 ? '' : '+'}${cur ? `${cur}*x` : ''}${(step!==1) ? `^${step}` : ''}`;

    return `${prev}${koef}${stepView}`;

}

function getPolynomial(...arg) {


    //let len = arg.length - 1;
    let res = arg.reduce(getItemPolynomial, '');

    return res === '' ? '0' : res.slice(1);
}


function assertEqual(expectedVal, actualVal, message) {
    if(expectedVal == actualVal) {
        console.log("+", message);
    }
    else {
        console.error("-", message, "(Expected:", expectedVal, "; Actual:", actualVal, ")");
    }
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function task2() {
    assertEqual("0", getPolynomial(), "Case #0");
    assertEqual("1.5", getPolynomial(1.5), "Case #1");
    assertEqual("-1.5", getPolynomial(-1.5), "Case #2");
    assertEqual("-2*x+3", getPolynomial(-2, 3), "Case #3");
    assertEqual("100", getPolynomial(0, 100), "Case #4");
    assertEqual("100", getPolynomial(0, 0, 0, 0, 100), "Case #5");
    assertEqual("x^2", getPolynomial(1, 0, 0), "Case #6");
    assertEqual("-x^3+1", getPolynomial(-1, 0, 0, 1), "Case #7");
    assertEqual("10.2*x^3-10.2*x^2+10.2*x-10.2", getPolynomial(0, 10.2, -10.2, 10.2, -10.2), "Case #8");
    assertEqual("8*x^4+3.5*x^3-x^2+12", getPolynomial(8, 3.5, -1, 0, 12), "Case #9");
    assertEqual("33*x^5+29*x^4-5*x^3-x^2-5*x-19", getPolynomial(33, 29, -5, -1, -5, -19), "Case #10");
    assertEqual("x^5+25*x^4+40*x^3-19*x^2+47*x+25", getPolynomial(1, 25, 40, -19, 47, 25), "Case #11");
    assertEqual("26*x^5+38*x^4+41*x^3+9*x^2+32*x+9", getPolynomial(26, 38, 41, 9, 32, 9), "Case #12");
    assertEqual("-8*x^5+38*x^4-16*x^3-5*x^2+12*x+20", getPolynomial(-8, 38, -16, -5, 12, 20), "Case #13");
    assertEqual("18*x^5+37*x^4+45*x^3+50*x^2+19*x-20", getPolynomial(18, 37, 45, 50, 19, -20), "Case #14");
    assertEqual("50*x^5+50*x^4+50*x^3-18*x^2+41*x+33", getPolynomial(50, 50, 50, -18, 41, 33), "Case #15");
    assertEqual("13*x^5-18*x^4+43*x^3+45*x^2+37*x+20", getPolynomial(13, -18, 43, 45, 37, 20), "Case #16");
    assertEqual("15*x^5+20*x^4+5*x^3-15*x^2+7*x", getPolynomial(15, 20, 5, -15, 7, 0), "Case #17");
    assertEqual("-8*x^5+21*x^4-20*x^3+11*x^2+47*x+12", getPolynomial(-8, 21, -20, 11, 47, 12), "Case #18");
    assertEqual("27*x^5+37*x^3+42*x^2+22*x-1", getPolynomial(27, 0, 37, 42, 22, -1), "Case #19");
    assertEqual("6.2*x^19+19.4*x^18+16.8*x^17+29.2*x^16+23.6*x^15+29.2*x^14+14.6*x^13+19*x^12+6*x^11+8.6*x^10+25.6*x^9-6*x^8-5.8*x^7+32.2*x^6+39.8*x^5+15.8*x^4+18*x^3-0.2*x^2+10.6*x-4.8", getPolynomial(6.2, 19.4, 16.8, 29.2, 23.6, 29.2, 14.6, 19, 6, 8.6, 25.6, -6, -5.8, 32.2, 39.8, 15.8, 18, -0.2, 10.6, -4.8), "Case #20");
    assertEqual("27.6*x^19+10.6*x^18+8.8*x^17-8.4*x^16+39.2*x^15+34*x^14+11.2*x^13-8.4*x^12+7.6*x^11+3.2*x^10-2.2*x^9+10.4*x^8-1.2*x^7+4*x^6+0.6*x^5+23*x^4-8.6*x^3-6.8*x^2+30.6*x-4.4", getPolynomial(27.6, 10.6, 8.8, -8.4, 39.2, 34, 11.2, -8.4, 7.6, 3.2, -2.2, 10.4, -1.2, 4, 0.6, 23, -8.6, -6.8, 30.6, -4.4), "Case #21");
    assertEqual("8.6*x^19+6.4*x^18+10.2*x^17+35.6*x^16+0.6*x^15+19.2*x^14+25.6*x^13+39.6*x^12+12.8*x^11+9.2*x^10+5.4*x^9-4.2*x^8+35.6*x^7+31.6*x^6+25.2*x^5+39.6*x^4-5*x^3+39.4*x^2+16.4*x+37.8", getPolynomial(8.6, 6.4, 10.2, 35.6, 0.6, 19.2, 25.6, 39.6, 12.8, 9.2, 5.4, -4.2, 35.6, 31.6, 25.2, 39.6, -5, 39.4, 16.4, 37.8), "Case #22");
    assertEqual("10*x^19+24.6*x^18+12.4*x^17+17.6*x^16+6.2*x^15-6*x^14+28*x^13+12.8*x^12+35.8*x^11+9*x^10+7.4*x^9+25*x^8+7.6*x^7+18*x^6+15.4*x^5+25.2*x^4+35.8*x^3+20*x^2+11.2*x+1", getPolynomial(10, 24.6, 12.4, 17.6, 6.2, -6, 28, 12.8, 35.8, 9, 7.4, 25, 7.6, 18, 15.4, 25.2, 35.8, 20, 11.2, 1), "Case #23");
    assertEqual("37.6*x^19+17.4*x^18-4.4*x^17+17.6*x^16-9.8*x^15+27.2*x^14+34.4*x^13+39.8*x^12-6.6*x^11+28.4*x^10+16.4*x^9+13.8*x^8-3.8*x^7+19.2*x^6+24.2*x^5+36*x^4+36*x^3+37.6*x^2+15.2*x+8", getPolynomial(37.6, 17.4, -4.4, 17.6, -9.8, 27.2, 34.4, 39.8, -6.6, 28.4, 16.4, 13.8, -3.8, 19.2, 24.2, 36, 36, 37.6, 15.2, 8), "Case #24");
    assertEqual("29.2*x^19-1.2*x^17+6.6*x^16-0.2*x^15-5.6*x^14-7.4*x^13-2.2*x^12+3.8*x^11+19.6*x^10+34*x^9+15.2*x^8+21.6*x^7+16*x^6+11*x^5+26.8*x^4+21.6*x^3+31.2*x^2+11*x+28.4", getPolynomial(29.2, 0, -1.2, 6.6, -0.2, -5.6, -7.4, -2.2, 3.8, 19.6, 34, 15.2, 21.6, 16, 11, 26.8, 21.6, 31.2, 11, 28.4), "Case #25");
    assertEqual("-1.4*x^19+37*x^18+38.8*x^17+1.4*x^16+38.6*x^15+2*x^14-5*x^13+14*x^12+29.4*x^11-2.4*x^10+13.4*x^9+27.8*x^8+1.6*x^7-1.2*x^6-9*x^5-6.8*x^4+6.4*x^3-8.6*x^2-0.4*x+38.2", getPolynomial(-1.4, 37, 38.8, 1.4, 38.6, 2, -5, 14, 29.4, -2.4, 13.4, 27.8, 1.6, -1.2, -9, -6.8, 6.4, -8.6, -0.4, 38.2), "Case #26");
    assertEqual("8.8*x^19+30*x^18+6*x^17+7*x^16+5.8*x^15-8.4*x^14-0.2*x^12+40*x^11-1.8*x^10+22*x^9+33.4*x^8+30.8*x^7+25.2*x^6-10*x^5-6.4*x^4+18*x^3+31.2*x^2+18.6*x+20.6", getPolynomial(8.8, 30, 6, 7, 5.8, -8.4, 0, -0.2, 40, -1.8, 22, 33.4, 30.8, 25.2, -10, -6.4, 18, 31.2, 18.6, 20.6), "Case #27");
    assertEqual("8.2*x^19+27.4*x^18-5.8*x^17+39*x^16-4.4*x^15+30.8*x^14-4.4*x^13+21*x^12+20.4*x^11-4.4*x^10-0.4*x^9+28.8*x^8+27.4*x^7+24.8*x^6-9.2*x^5+20*x^4+14*x^3+4.6*x^2+39.6*x+9.8", getPolynomial(8.2, 27.4, -5.8, 39, -4.4, 30.8, -4.4, 21, 20.4, -4.4, -0.4, 28.8, 27.4, 24.8, -9.2, 20, 14, 4.6, 39.6, 9.8), "Case #28");
    assertEqual("29.6*x^19+15.4*x^18+14.2*x^17+4*x^16+13.2*x^15+27.8*x^14+34.2*x^13-2.2*x^12+13*x^11-4.2*x^10+20.8*x^9+33.4*x^8+8.8*x^7-3.8*x^6-1.6*x^5-4.2*x^4+4*x^3-9.2*x^2+29.6*x+23", getPolynomial(29.6, 15.4, 14.2, 4, 13.2, 27.8, 34.2, -2.2, 13, -4.2, 20.8, 33.4, 8.8, -3.8, -1.6, -4.2, 4, -9.2, 29.6, 23), "Case #29");
}

task2();

