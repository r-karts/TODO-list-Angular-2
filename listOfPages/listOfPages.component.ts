import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'list-of-page',
    templateUrl: 'src/app/listOfPages/listOfPages.component.html',
    styleUrls: ['src/app/listOfPages/listOfPages.component.css']})

export class ListOfPages implements OnInit {

    @Input() totalPages: number = 0;
    currentPage: number = 1;
    middlePosition: boolean = false;
    leftmostPage: number;
    rightmostPage: number;
    listCurrentPages: number[];
    margin: number = 2;
    lengthList: number = 5;

    private subscription: Subscription;
    private querySubscription: Subscription;
    private queryParam : any;

    constructor(
        private activateRoute: ActivatedRoute,
        private router: Router) {
        this.listCurrentPages = [];
        this.subscription = activateRoute.params.subscribe((params) => {
            this.currentPage = +params['id'];
            this.changePage();
        });
        this.querySubscription = activateRoute.queryParams.subscribe(
            (queryParam: any) => {
                this.queryParam = queryParam;
            });
    }

    ngOnInit() {
        this.rangeFill(1, this.lengthList);

    }

    clickOnPage(num: number) {
        this.router.navigate(['/page', num], {
            queryParams: this.queryParam,
        });
    }

    changePage() {
        console.log(typeof this.currentPage);
        this.listCurrentPages = [];
        this.middlePosition = (this.currentPage > this.margin &&
            this.currentPage < this.totalPages - this.margin);

        if (this.middlePosition) {
            this.leftmostPage = this.currentPage - this.margin;
            this.rightmostPage = this.currentPage + this.margin;
            console.log(this.leftmostPage);
            console.log(this.rightmostPage);
            this.rangeFill(this.leftmostPage, this.rightmostPage);
        } else if (this.currentPage <= this.margin) {
            this.rangeFill(1, this.lengthList);
        } else {
            this.rangeFill(this.totalPages - this.lengthList, this.totalPages);
        }
    }

    rangeFill(begin: number, end: number) {
        for (let i = begin; i <= end; i += 1) {
            this.listCurrentPages.push(i);
        }
    }
}
