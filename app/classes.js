System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var monthsHash, Tree, PineTree, FruitTree;
    return {
        setters:[],
        execute: function() {
            monthsHash = {
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
            Tree = (function () {
                function Tree(name, bloomingMonth) {
                    this.bloomingMonth = bloomingMonth;
                    this.name = name;
                }
                Object.defineProperty(Tree.prototype, "name", {
                    get: function () {
                        return this._name;
                    },
                    set: function (value) {
                        this._name = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Tree.prototype, "bloomingMonth", {
                    get: function () {
                        return this._bloomingMonth;
                    },
                    set: function (value) {
                        if (value !== 0) {
                            this._bloomingMonth = value;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Tree.prototype.getBloomInfo = function () {
                    return "" + monthsHash[this.bloomingMonth];
                };
                return Tree;
            }());
            PineTree = (function (_super) {
                __extends(PineTree, _super);
                function PineTree() {
                    _super.apply(this, arguments);
                    this.hasNeedles = true;
                }
                return PineTree;
            }(Tree));
            FruitTree = (function (_super) {
                __extends(FruitTree, _super);
                function FruitTree() {
                    _super.apply(this, arguments);
                    this.hasFruits = true;
                }
                return FruitTree;
            }(Tree));
            exports_1("default",Tree);
            exports_1("PineTree", PineTree);
            exports_1("FruitTree", FruitTree);
        }
    }
});
//# sourceMappingURL=classes.js.map