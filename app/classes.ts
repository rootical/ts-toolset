interface Plant {
    name: string;
}

interface Months {
    [index: number]: string;
}

const monthsHash: Months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
};

abstract class Tree implements Plant {

    private _bloomingMonth: number;
    private _name: string;

    get name():string {
        return this._name;
    }

    set name(value:string) {
        this._name = value;
    }

    get bloomingMonth():number {
        return this._bloomingMonth;
    }

    set bloomingMonth(value:number) {
        if (value !== 0) {
            this._bloomingMonth = value;
        }
    }

    constructor(name, bloomingMonth) {
        this.bloomingMonth = bloomingMonth;
        this.name = name;
    }

    getBloomInfo() {
        return `${monthsHash[this.bloomingMonth]}`;
    }

}

class PineTree extends Tree {
    protected hasNeedles: string = true;
}

class FruitTree extends Tree {
    protected hasFruits: string = true;
}

export default Tree;

export {
    PineTree,
    FruitTree
}