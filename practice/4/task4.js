class Puzzle15 {
    constructor(elementId) {
        this.div = document.getElementById(elementId);
        this.table = document.createElement('table');

        if (this.div === undefined) {
            return;
        }

        this.tdArray = [];

        this.state = [];
        this.startState = [];
        this.emptyCell = [];

        this.shuffleButton = createElement('input', { class: 'shuffle-button', type: 'button', value: 'Перемешать' }, { click: ()=>{this.shuffleState()} });
        this.resetButton = createElement('input', { class: 'reset-button', type: 'button', value: 'Сбросить' }, { click: ()=>{ this.setState(array2matrix(this.startState));} });


        this.table.addEventListener('click', (event)=>{this.onTitleClick(event)});


        this.createElements();

        this.shuffleState(); // инициализация

    }

    render() {
        for(let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                this.tdArray[i][j].innerText = this.state[i][j] ? this.state[i][j] : '-';
            }
        }
    }

    createElements() {
        let table = this.table;

        for (let i = 0; i < 4; i++) {
            this.tdArray.push([]);

            let tr = document.createElement('tr');
            for (let j = 0; j < 4; j++) {
                let td = document.createElement('td');
                let a = createElement('a', { class: `${i}${j}`, href: '#' });
                td.appendChild(a);
                tr.appendChild(td);
                this.tdArray[this.tdArray.length-1].push(a);
            }
            table.appendChild(tr);
        }
        this.div.appendChild(table);
        this.div.appendChild(this.shuffleButton);
        this.div.appendChild(this.resetButton);
    }

    onTitleClick(event) {
        let target = event.target;
        let r, c;

        while (target !== this.table) {
            console.log(target.tagName);

            if (target.tagName === 'A') {
                [r, c] = target.className.split('');
                this.makeTurn( +r, +c ) ;
                return;
            }

            target = target.parentNode;
        }
    }

    shuffle() {
        this.shuffleButton.click();
    }

    reset() {
        this.resetButton.click();
    }

    getState(){
        return this.state;
    }

    setState(state) {
        this.state = state;

        empty: for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (!this.state[i][j]) {
                    this.state[i][j] = 0;
                    this.emptyCell = [i, j];
                    break empty;
                }
            }
        }

        this.render();
    }

    isSolved() {

        let isSolved = true;
        let prev = 0, item;
        solved: for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                item = this.state[i][j];
                if (item - prev !== 1) {
                    if (item || i + j !== 6) {
                        isSolved = false;
                        break solved;
                    }
                }
                prev = item;
            }
        }
        return isSolved;
    }

    canMakeTurn(r, c) {
        let [er, ec] = this.emptyCell;
        er = Number(er);
        ec = Number(ec);

        return (r === er && (c-1 === ec || c+1 === ec)) || (c === ec && (r-1 === er || r+1 === er));
    }

    makeTurn(r, c) {
        if (!this.canMakeTurn(r, c)) return false;

        let state = this.getState();
        let [er, ec] = this.emptyCell;
        [ state[r][c], state[er][ec] ] = [ state[er][ec], state[r][c] ];
        this.emptyCell = [r, c];

        this.render();
        return true;
    }

    shuffleState() {
        let state;
        while ( !isValidState( state = generateRandomArray(0, 15) ) ) {}
        this.startState = state;
        this.setState(array2matrix(state));
    }
}

function generateRandomArray(minValue, maxValue) {
    const res = new Array(maxValue - minValue + 1);
    const random = getRandomizator(0, res.length-1);
    for (let i = minValue; i <= maxValue; i++) {
        let index;
        while (res[index = Math.round( random() )]){}
        res[index] = i;
    }
    return res;
}

function isValidState(state) {
    let e; // номер ряда пустой клетки
    let sum = 0;
    for (let i = 0; i < 16; i++) {
        let currN = state[i];
        if (!currN) {
            e = Math.floor( i / 4 ) + 1;
            continue;
        }

        let n = 0;
        for (let j = i + 1; j < 16; j++) {
            if (currN > state[j]) {
                n++;
            }
        }
        sum += n;
    }
    return !((sum+e)%2);
}

function getRandomizator(a, b) {
    return () => {
        return Math.random() * (b-a) + a;
    }
}

function createElement(tagName, props, events) {
    let el = document.createElement(tagName);

    if (props) {
        for (let prop of Object.entries(props)) {
            el.setAttribute(...prop);
        }
    }

    if (events) {
        for (let event of Object.entries(events)) {
            el.addEventListener(...event);
        }
    }

    return el;
}

function array2matrix(arr) {

    let m = new Array(4);
    m[0] = arr.slice(0, 4);
    m[1] = arr.slice(4, 8);
    m[2] = arr.slice(8, 12);
    m[3] = arr.slice(12, 16);

    return m;
}