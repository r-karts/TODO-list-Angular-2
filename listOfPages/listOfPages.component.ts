import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

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


    constructor(public subject : any) {
        this.listCurrentPages = [];
        this.subject = new Subject();
    }

    ngOnInit() {
        this.rangeFill(1, this.lengthList);
    }

    @Output() onChanged = new EventEmitter<{}>();

    clickOnPage(num : number) {
        // this.subject.subscribe({
        //     next : (value:any) => console.log(value)});
        // this.subject.next(99);
        return { num };
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
