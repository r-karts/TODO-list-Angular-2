import { Component, Input } from '@angular/core';
import { Listing } from '../NestoriaData';

@Component({
    selector: 'popup-house',
    templateUrl: 'src/app/popup house/popup-house.component.html',
    styleUrls: ['src/app/popup house/popup-house.component.css'],
})
export class PopupHouseComponent {
    @Input() tile: Listing = <Listing>{};

}
