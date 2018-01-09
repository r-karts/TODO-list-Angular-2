import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DataRequest } from '../NestoriaData';

@Component({
    selector: 'list-of-page',
    templateUrl: 'src/app/listOfPages/listOfPages.component.html',
    styleUrls: ['src/app/listOfPages/listOfPages.component.css']})

export class ListOfPages implements OnInit {

    totalPages: number = 10;
    currentPage: number = 1;
    middlePosition: boolean = false;
    leftmostPage: number;
    rightmostPage: number;
    listCurrentPages: number[];
    margin: number = 2;
    lengthList: number = 5;

    private id: number;
    private querySubscription: Subscription;
    private queryParam : any;

    constructor(
        private activateRoute: ActivatedRoute,
        private router: Router) {
        this.listCurrentPages = [];

        this.querySubscription = activateRoute.queryParams.subscribe(
            (queryParam: any) => {
                this.queryParam = queryParam;
            });
    }

    ngOnInit() {
        this.rangeFill(1, this.lengthList);

        // this.activateRoute.params.subscribe(
        //     (params: any) => {
        //         this.id = params['id'];
        //         console.log(this.id + ' <--');
        //     });
    }

    @Output() onChanged = new EventEmitter<{}>();

    clickOnPage(num: number) {
        this.router.navigate(['/page', num],
            {
                queryParams: this.queryParam,
            });
        // console.log(this.queryParam);
    }

// делать через параметр в строке обновление листов строк или через сабджект
    setPosition(position: number) {
        this.currentPage = position;
        this.listCurrentPages = [];

        this.middlePosition = (this.currentPage > this.margin &&
            this.currentPage < this.totalPages - this.margin);

        if (this.middlePosition) {
            this.leftmostPage = this.currentPage - this.margin;
            this.rightmostPage = this.currentPage + this.margin;
            for (let i = this.leftmostPage; i <= this.rightmostPage; i += 1) {
                this.listCurrentPages.push(i);
            }
        } else if (this.currentPage <= this.margin) {
            this.rangeFill(1, this.lengthList);
        } else {
            this.rangeFill(this.totalPages - this.lengthList, this.totalPages);
        }
        this.onChanged.emit(this.currentPage);
    }

    rangeFill(begin: number, end: number) {
        for (let i = begin; i <= end; i += 1) {
            this.listCurrentPages.push(i);
        }
    }
}
