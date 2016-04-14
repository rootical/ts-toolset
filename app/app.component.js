System.register(['angular2/core', 'angular2/common', './classes'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, classes_1;
    var template, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (classes_1_1) {
                classes_1 = classes_1_1;
            }],
        execute: function() {
            template = "\n    <h1>Registered Plants</h1>\n    <table>\n        <thead>\n            <tr>\n                <td>Name</td>\n                <td>Blooming</td>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"#plant of plants;\">\n                <td>\n                   {{plant.name}}\n                   <div>\n                       <small *ngIf=\"plant.hasNeedles\">Has a lot of needles</small>\n                       <small *ngIf=\"plant.hasFruits\">Produces fruits</small>\n                   </div>\n                </td>\n                <td>\n                    {{plant.getBloomInfo()}}\n                </td>\n            </tr>\n        </tbody>\n    </table>\n";
            AppComponent = (function () {
                function AppComponent() {
                    var easternPine = new classes_1.PineTree('Eastern White Pine', 3);
                    var westernPine = new classes_1.PineTree('Western White Pine', 4);
                    var appleTree = new classes_1.FruitTree('Antonovka Apple', 3);
                    var orangeTree = new classes_1.FruitTree('Orange tree', 12);
                    this.plants = [easternPine, westernPine, appleTree, orangeTree];
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'plant-app',
                        template: template,
                        directives: [common_1.NgFor, common_1.NgIf]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map