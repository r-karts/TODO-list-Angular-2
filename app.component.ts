import { Component } from '@angular/core';
import { FilterService } from './services/filtres.service';
import { Listing, IDataRequest, IDataResponse, INestoria } from './NestoriaData';

@Component({
    selector: 'purchase-app',
    templateUrl: 'src/app/app.component.html',
    styleUrls: ['src/app/app.component.css']})
export class AppComponent {

    showLoading : boolean = false;
    statusTable : boolean = true;
    networkProblem : boolean = false;
    currentPage : number = 0;
    listings: Listing[];
    filterProp: IDataRequest;


    constructor (private filterService : FilterService) {

    }

    changeTable(filterProp:IDataRequest) {
        this.showLoading = true;
        this.filterProp = filterProp;
        this.filterService.setParams(filterProp).map((data: INestoria) => data.response)
            .subscribe((resp: IDataResponse) => {
                this.showLoading = false;
                this.listings = resp.listings;
                this.statusTable = this.listings.length > 0;
                this.networkProblem = false;
            },
                       () => {
                           this.statusTable = false;
                           this.showLoading = false;
                           this.networkProblem = true;
                       });
    }
    changePage(currentPage: number) {
        this.filterProp.page = currentPage.toString();
        this.currentPage = currentPage;
        this.filterService.setParams(this.filterProp).map((data: INestoria) => data.response)
            .subscribe((resp: IDataResponse) => {
                this.showLoading = false;
                this.listings = resp.listings;
                this.statusTable = this.listings.length > 0;
                this.networkProblem = false;
            },
                       () => {
                           this.statusTable = false;
                           this.showLoading = false;
                           this.networkProblem = true;
                       });
    }
}
