import { Component, Input } from '@angular/core';
import { Listing } from '../NestoriaData';

@Component({
    selector: 'table-comp',
    templateUrl: 'src/app/table/table.component.html',
    styleUrls: ['src/app/table/table.component.css']})
export class TableComponent {

    @Input() listings: Listing[];

}
