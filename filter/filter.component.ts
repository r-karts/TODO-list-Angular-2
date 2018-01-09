import { Component, EventEmitter, Output } from '@angular/core';
import { DataRequest } from '../NestoriaData';

@Component({
    selector: 'filter-comp',
    templateUrl: 'src/app/filter/filter.component.html',
    styleUrls: ['src/app/filter/filter.component.css']})

export class FilterComponent {
    pretty: number = 1;
    action: string = 'search_listings';
    placeName: string = 'london';
    listingType: string = 'buy';
    country: string = 'uk';

}
