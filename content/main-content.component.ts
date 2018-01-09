import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { IDataRequest, IDataResponse, INestoria, Listing } from '../NestoriaData';
import { FilterService } from '../services/filtres.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'main-content',
    templateUrl: 'src/app/content/main-content.component.html',
    styleUrls: ['src/app/content/main-content.component.css']})

export class MainContentComponent {

    @Input() filterProp: IDataRequest;
    currentPage : number = 0;
    showLoading : boolean = false;
    statusTable : boolean = true;
    networkProblem : boolean = false;
    listings: Listing[];

    constructor(private filterService : FilterService, private activatedRoute: ActivatedRoute) {}

    // ngOnChanges() {
    //     this.changePage(this.currentPage);
    // }

    // public ngOnInit() {
    //     this.activatedRoute.params.subscribe(
    //         (params: Params) => {
    //             if (params.id !== undefined) {
    //                 this.changePage(params.id);
    //             }
    //         });
    // }

    // changePage(currentPage: number) {
    //     this.filterProp.page = currentPage.toString();
    //     this.currentPage = currentPage;
    //     this.filterService.setParams(this.filterProp).map((data: INestoria) => data.response)
    //         .subscribe((resp: IDataResponse) => {
    //             this.showLoading = false;
    //             this.listings = resp.listings;
    //             this.statusTable = this.listings.length > 0;
    //             this.networkProblem = false;
    //         },
    //                    () => {
    //                        this.statusTable = false;
    //                        this.showLoading = false;
    //                        this.networkProblem = true;
    //                    });
    // }


}
