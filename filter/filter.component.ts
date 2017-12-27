import { FiltresService } from '../services/filtres.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Listing, RequestNestoria, Response } from '../NestoriaData';

@Component({
    selector: 'filter-comp',
    templateUrl: 'src/app/filter/filter.component.html',
    styleUrls: ['src/app/filter/filter.component.css'],
    providers: [FiltresService]})

export class FilterComponent {

    pretty: number = 1;
    action: string = 'search_listings';
    placeName: string = 'london';
    listingType: string = 'buy';
    country: string = 'uk';

    filterProp :  RequestNestoria;
    // listings: Listing[];
    // response: Response;
    // loadingScreen : true;


    @Output() onChanged = new EventEmitter<{}>();

    applyFilter() {

        this.filterProp.country = this.country;
        this.filterProp.pretty = this.pretty.toString();
        this.filterProp.listingType = this.listingType;
        this.filterProp.placeName = this.placeName;
        this.filterProp.action = this.action;

        this.onChanged.emit(this.filterProp);
    }

}
