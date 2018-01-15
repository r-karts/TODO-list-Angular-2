

import {Component, Input, OnChanges} from "@angular/core";
import {Listing} from "../NestoriaData";

@Component({
    selector: 'popup-house',
    templateUrl: 'src/app/popup house/popup-house.component.html',
    styleUrls: ['src/app/popup house/popup-house.component.css'],
})
export class PopupHouseComponent implements OnChanges {
    @Input() tile: Listing = <Listing>{};

    ngOnChanges() {
        if (this.tile)
            console.log(this.tile);
    }
}