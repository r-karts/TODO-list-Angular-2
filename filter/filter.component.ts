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

    filterProp : DataRequest;
    @Output() onChanged = new EventEmitter<{}>();

    constructor() {
        this.filterProp = new DataRequest();
    }

    applyFilter() {
        this.filterProp.country = this.country;
        this.filterProp.pretty = this.pretty.toString();
        this.filterProp.listingType = this.listingType;
        this.filterProp.placeName = this.placeName;
        this.filterProp.action = this.action;

        this.onChanged.emit(this.filterProp);
    }

}
