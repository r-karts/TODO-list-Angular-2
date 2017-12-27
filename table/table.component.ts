import { Component, Input } from '@angular/core';
import { Listing } from '../NestoriaData';
import { DataService } from '../services/data.service';
import { HttpParams } from '@angular/common/http';

@Component({
    selector: 'table-comp',
    templateUrl: 'src/app/table/table.component.html',
    styleUrls: ['src/app/table/table.component.css'],
    providers: [DataService]})
export class TableComponent {

    urlParam: HttpParams;
    // @Input() listings: Listing[];

    constructor() {
        this.urlParam = new HttpParams();
    }
}
