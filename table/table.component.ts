import { Component } from '@angular/core';
import { IDataRequest, IDataResponse, INestoria, Listing } from '../NestoriaData';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { FilterService } from '../services/filtres.service';

@Component({
    selector: 'table-comp',
    templateUrl: 'src/app/table/table.component.html',
    styleUrls: ['src/app/table/table.component.css'],
})
export class TableComponent {

    listings: Listing[];
    selectTile: Listing;
    private querySubscription: Subscription;
    public totalPages: number = 0;
    private currentPage: number = 0;
    private dataRequest: IDataRequest;

    hiddenPopup: boolean = true;

    showLoading: boolean = false;
    statusTable: boolean = true;
    networkProblem: boolean = false;

    constructor(private activateRoute: ActivatedRoute, private filterService: FilterService) {

        this.querySubscription = activateRoute.queryParams.subscribe(
            (queryParam: IDataRequest) => {
                this.dataRequest = queryParam;
                console.log(queryParam);
                this.requestData(this.dataRequest);
                this.statusTable = false;
                this.showLoading = true;
                this.networkProblem = false;
            });
    }

    requestData(dataRequest: IDataRequest) {
        console.log('REQUEST DATA');
        this.filterService.setParams(dataRequest).map((data: INestoria) => data.response)
            .subscribe((resp: IDataResponse) => {
                this.showLoading = false;
                this.listings = resp.listings;
                this.totalPages = resp.total_pages;
                this.currentPage = resp.page;
                this.statusTable = this.listings.length > 0;
                this.networkProblem = false;
            },
                       () => {
                           this.statusTable = false;
                           this.showLoading = false;
                           this.networkProblem = true;
                       });

    }

    onChanged(tile: Listing) {
        this.selectTile = tile;
        this.hiddenPopup = false;
    }

    showFavoriteTile() {
        this.listings = JSON.parse(localStorage.getItem('favoriteList'));
    }
}
