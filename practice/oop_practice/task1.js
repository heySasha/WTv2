class SkyWalker {
    constructor(x, y) {
        this.x = x;
        this.y = y;

    }

    moveUp() {
        this.y++;
        SkyWalker._numMoves++;
        return this;
    }

    moveDown() {
        this.y--;
        SkyWalker._numMoves++;
        return this;
    }

    moveLeft() {
        this.x--;
        SkyWalker._numMoves++;
        return this;
    }

    moveRight() {
        this.x++;
        SkyWalker._numMoves++;
        return this;
    }

    get x() {
        return this._x;
    }

    set x(v) {
        if (typeof  v !== 'number') {
            throw Error('Invalid type');
        }
        this._x = v;
    }

    get y() {
        return this._y;
    }

    set y(v) {
        if (typeof  v !== 'number') {
            throw Error('Invalid type');
        }
        this._y = v;
    }

    equals(walker) {
        return this.x === walker.x && this.y === walker.y;
    }

    static get numMoves() {
        return SkyWalker._numMoves;
    }
}
SkyWalker._numMoves = 0;

let walker1 = new SkyWalker(0, 0);
let walker2 = new SkyWalker(5, 3);

walker1.moveUp().moveRight().moveUp().moveRight();
walker2.moveLeft().moveLeft().moveLeft().moveDown();

console.log('x =', walker1.x, '; y =', walker1.y);
//console.log('x =', walker2.x, '; y =', walker2.y);
console.log('walker1 equals walker2:', walker1.equals(walker2));

console.log(SkyWalker.numMoves);