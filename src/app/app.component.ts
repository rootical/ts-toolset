import {Component, Input} from 'angular2/core';
import {NgFor, NgIf} from 'angular2/common';
import {PineTree, FruitTree} from './classes';
import Tree from './classes';

const template: string = `
    <h1>Registered Plants</h1>
    <table>
        <thead>
            <tr>
                <td>Name</td>
                <td>Blooming</td>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="#plant of plants;">
                <td>
                   {{plant.name}}
                   <div>
                       <small *ngIf="plant.hasNeedles">Has a lot of needles</small>
                       <small *ngIf="plant.hasFruits">Produces fruits</small>
                   </div>
                </td>
                <td>
                    {{plant.getBloomInfo()}}
                </td>
            </tr>
        </tbody>
    </table>
`;

@Component({
    selector: 'plant-app',
    template: template,
    directives: [NgFor, NgIf]
})
export class AppComponent {
    plants: Tree[];

    constructor() {
        let easternPine = new PineTree('Eastern White Pine', 3);
        let westernPine = new PineTree('Western White Pine', 4);
        let appleTree = new FruitTree('Antonovka Apple', 3);
        let orangeTree = new FruitTree('Orange tree', 12);
        this.plants = [easternPine, westernPine, appleTree, orangeTree];
    }
}