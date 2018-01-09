import { Component } from '@angular/core';
import { DataRequest, IDataResponse, INestoria, Listing } from '../NestoriaData';
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
    private subscription: Subscription;
    private queryParam: DataRequest;
    private querySubscription: Subscription;
    private totalPages : number = 0;
    private currentPage : number = 0;

    showLoading: boolean = false;
    statusTable: boolean = true;
    networkProblem: boolean = false;

    constructor(private activateRoute: ActivatedRoute, private filterService: FilterService) {
        this.queryParam = new DataRequest();
        this.subscription = activateRoute.params.subscribe((params) => {
            this.queryParam.page = params['id'];
            this.requestData(this.queryParam);
        });
        this.querySubscription = activateRoute.queryParams.subscribe(
            (queryParam: any) => {
                this.queryParam.action = queryParam['action'];
                this.queryParam.placeName = queryParam['placeName'];
                this.queryParam.country = queryParam['country'];
                this.queryParam.listingType = queryParam['listingType'];
                this.queryParam.pretty = queryParam['pretty'];
                this.requestData(this.queryParam);
            });
    }

    requestData(dataRequest: DataRequest) {
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

}
