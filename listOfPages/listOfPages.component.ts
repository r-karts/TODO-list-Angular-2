import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {DataRequest, IDataLocalFilter, IDataRequest, IQueryParam} from '../NestoriaData';
// фильтр избранное прокрутка попап хаты
@Component({
    selector: 'list-of-page',
    templateUrl: 'src/app/listOfPages/listOfPages.component.html',
    styleUrls: ['src/app/listOfPages/listOfPages.component.css']})

export class ListOfPages {
    @Input() totalPages: number = 1;
    currentPage: number = 1;
    middlePosition: boolean = false;
    leftmostPage: number;
    rightmostPage: number;
    listCurrentPages: number[];
    margin: number = 2;
    lengthList: number = 5;


    private querySubscription: Subscription;
    private queryParam : IDataRequest = <IDataRequest>{};
    // private filterParam : IDataLocalFilter;

    constructor(
        private activateRoute: ActivatedRoute,
        private router: Router) {
        // Object.defineProperties(this.queryParam, {
        //     page: {
        //         value : '',
        //         writable: true,
        //     },
        // });

        this.listCurrentPages = [];

        this.querySubscription = activateRoute.queryParams.subscribe(
            (queryParam: IDataRequest) => {
                this.currentPage = +queryParam.page;
                this.changePage(this.currentPage);
                Object.assign(this.queryParam, queryParam);
            });
    }

    clickOnPage(num: number) {
        this.queryParam.page = num.toString();
        this.router.navigate(['/sale'], {
            queryParams: this.queryParam,
        });
    }
    changePage(currentPage : number) {
        console.log(this.totalPages + ' totalPages');
        this.middlePosition = (currentPage > this.margin);
            // &&
            // currentPage < this.totalPages - this.margin);

        if (this.middlePosition) {
            this.leftmostPage = currentPage - this.margin;
            this.rightmostPage = currentPage + this.margin;

            this.rangeFill(this.leftmostPage, this.rightmostPage, 'middle');
            return;
        }
        if (currentPage <= this.margin) {
            this.rangeFill(1, this.lengthList, ' first');
            return;
        }
        // if (currentPage >= this.totalPages - this.margin) {
        //     this.rangeFill(this.totalPages - this.lengthList, this.totalPages, 'last');
        // }
    }

    rangeFill(begin: number, end: number, message: string) {
        this.listCurrentPages = [];
        console.log(begin + ' ' + end);
        for (let i = begin; i <= end; i += 1) {
            this.listCurrentPages.push(i);
        }
    }
}
