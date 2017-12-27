import { Component, Input } from '@angular/core';
import { Listing } from '../NestoriaData';

@Component({
    selector: 'tile-comp',
    templateUrl: 'src/app/tile/tile.component.html',
    styleUrls: ['src/app/tile/tile.component.css'],
})
export class TileComponent {
    @Input() tile: Listing;
}
