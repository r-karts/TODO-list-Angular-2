import { Component, EventEmitter, Output } from '@angular/core';
import {DataRequest, IDataRequest} from '../NestoriaData';
import {Router} from "@angular/router";

@Component({
    selector: 'filter-comp',
    templateUrl: 'src/app/filter/filter.component.html',
    styleUrls: ['src/app/filter/filter.component.css']})

export class FilterComponent {
    pretty: string = '1';
    action: string = 'search_listings';
    placeName: string = 'london';
    listingType: string = 'buy';
    country: string = 'uk';
    priceMin: string = '';
    priceMax: string = '';
    bedroomMin: string = '';
    bedroomMax: string = '';
    bathroomMin: string = '';
    bathroomMax: string = '';
    filterProp : IDataRequest = <IDataRequest>{};

    constructor(private router: Router) {
    }

    applyFilter() {
        this.filterProp.action = this.action;
        this.filterProp.placeName = this.placeName;
        this.filterProp.country = this.country;
        this.filterProp.listingType = this.listingType;
        this.filterProp.pretty = this.pretty;
        this.filterProp.page = '1';

        if (this.priceMin)
            this.filterProp.priceMin = this.priceMin;
        if (this.priceMax)
            this.filterProp.priceMax = this.priceMax;
        if (this.bedroomMax)
            this.filterProp.bedroomMax = this.bedroomMax;
        if (this.bedroomMin)
            this.filterProp.bedroomMin = this.bedroomMin;
        if (this.bathroomMax)
            this.filterProp.bathroomMax = this.bathroomMax;
        if (this.bathroomMin)
            this.filterProp.bathroomMin = this.bathroomMin;

        this.router.navigate(['/sale'], {
            queryParams: this.filterProp,
        });

    }

}
