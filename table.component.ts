import {Component, OnInit} from '@angular/core';


class Row {

    constructor(public todo: string, public date: string, public check: boolean) {
    }

}


@Component({
    selector: 'table-comp',
    templateUrl: 'src/app/table.component.html',
    styleUrls: ['src/app/table.component.css']
})
export class TableComponent implements OnInit {

    list: Row[];

    ngOnInit() {
        this.list = JSON.parse(localStorage.getItem('rows'));
        console.log(this.list);
    }

    setInLocalStorage() {
        localStorage.setItem('rows', JSON.stringify(this.list));
    }

    addRow(todo: string, date: string, check: boolean) {
        if (this.list) {
            this.list.push(new Row(todo, date, check));
        } else {
            this.list = [new Row(todo, date, check)];
        }
        this.setInLocalStorage();
    }

    removeRow(index: any) {
        this.list.splice(index, 1);
        this.setInLocalStorage();
    }

    compleadCase(row: Row) {
        row.check = !row.check;
    }

    clearList() {
        console.log('asd');
        this.list = [];
    }

}