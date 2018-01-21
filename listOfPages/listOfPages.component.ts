import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { IDataRequest } from '../NestoriaData';

@Component({
    selector: 'list-of-page',
    templateUrl: 'src/app/listOfPages/listOfPages.component.html',
    styleUrls: ['src/app/listOfPages/listOfPages.component.css'],
})

export class ListOfPages {
    @Input() totalPages: number = 1; // totalPages хоть и передаю в компонент но
    // он всё равно при загрузке уходит  ноль ни ебу почему, поэтому тут костыль есть
    currentPage: number = 1;
    middlePosition: boolean = false;
    leftmostPage: number;
    rightmostPage: number;
    listCurrentPages: number[];
    margin: number = 2;
    lengthList: number = 5;


    private querySubscription: Subscription;
    private queryParam: IDataRequest = <IDataRequest>{};

    // private filterParam : IDataLocalFilter;

    constructor(private activateRoute: ActivatedRoute,
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

    changePage(currentPage: number) {
        this.middlePosition = (currentPage > this.margin);
        // &&
        // currentPage < this.totalPages - this.margin);

        if (this.middlePosition) {
            this.leftmostPage = currentPage - this.margin;
            this.rightmostPage = currentPage + this.margin;

            this.rangeFill(this.leftmostPage, this.rightmostPage);
            return;
        }
        if (currentPage <= this.margin) {
            this.rangeFill(1, this.lengthList);
            return;
        }
        // if (currentPage >= this.totalPages - this.margin) {
        //     this.rangeFill(this.totalPages - this.lengthList, this.totalPages, 'last');
        // }
    }

    rangeFill(begin: number, end: number) {
        this.listCurrentPages = [];
        for (let i = begin; i <= end; i += 1) {
            this.listCurrentPages.push(i);
        }
    }
}
