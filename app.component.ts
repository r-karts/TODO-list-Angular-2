import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Listing, RequestNestoria } from './NestoriaData';
import { FiltresService } from './services/filtres.service';
@Component({
    selector: 'purchase-app',
    templateUrl: 'src/app/app.component.html',
    styleUrls: ['src/app/app.component.css'],
    providers: [FiltresService]})                  // проблема была тут, надо всё нахер раскоментить
export class AppComponent {

    response: Response;
    statusTable : boolean = false;
    filterProp : RequestNestoria;
    constructor (private filterService : FiltresService) {}

    // changeTable(filterProp:RequestNestoria) {
        // this.filterProp = filterProp;
        // this.filterService.setParams(this.filterProp).subscribe((resp: Response) => {
            // this.response = resp['response'];
            // this.listings = this.response['listings'];
        // });
    // }

    /*
    * this.filterService.setParams(this.placeName, this.pretty,
                                     this.action, this.listingType, this.country)
            .subscribe((resp) => {
                // this.response = <Response>resp['response'];
                // this.listings = <Listing[]>this.response.listings;

            });
    * */

}
