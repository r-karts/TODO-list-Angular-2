import {Component, Input, OnChanges} from '@angular/core';
import {DataRequest, IDataResponse, INestoria, Listing} from '../NestoriaData';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {FilterService} from "../services/filtres.service";

@Component({
    selector: 'table-comp',
    templateUrl: 'src/app/table/table.component.html',
    styleUrls: ['src/app/table/table.component.css']})
export class TableComponent {

    listings: Listing[];
    private subscription: Subscription;
    private queryParam : DataRequest;
    private querySubscription: Subscription;

    constructor(private activateRoute: ActivatedRoute, private filterService : FilterService) {
        this.queryParam = new DataRequest();
        this.subscription = activateRoute.params.subscribe(params => {
            this.queryParam = new DataRequest();
            console.log('check table subscribe');
            this.queryParam.page =  params['id'];
            this.requestData(this.queryParam);
        });
        this.querySubscription = activateRoute.queryParams.subscribe(
            (queryParam: any) => {
                this.queryParam.action = queryParam['action'];
                this.queryParam.placeName = queryParam['placeName'];
                this.queryParam.country = queryParam['country'];
                this.queryParam.listingType = queryParam['listingType'];
                this.queryParam.pretty = queryParam['pretty'];
            });
    }

    requestData(dataRequest : DataRequest) {
        console.log('----');
        console.log(dataRequest);
        console.log('----');
        this.filterService.setParams(dataRequest).map((data: INestoria) => data.response)
            .subscribe((resp: IDataResponse) => {
                // this.showLoading = false;
                this.listings = resp.listings;
                console.log(this.listings);
                // this.statusTable = this.listings.length > 0;
                // this.networkProblem = false;
            },
                       () => {
                           // this.statusTable = false;
                           // this.showLoading = false;
                           // this.networkProblem = true;
                       });

    }

}
