import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TableComponent} from "./table.component";
import {DataService} from "./data.service";

@Component({
    selector: 'purchase-app',
    templateUrl: 'src/app/app.component.html',
    styleUrls: ['src/app/app.component.css'],
    providers: [DataService]
})
export class AppComponent implements OnInit {

    myForm: FormGroup;
    todo: string;
    date: string;

    @ViewChild(TableComponent) private table: TableComponent;

    submitRow() {
        this.table.addRow(this.todo, this.date, false);
    }

    constructor(private dataService: DataService, private builder: FormBuilder) {
    }

    ngOnInit() {
        this.myForm = this.builder.group({
            firstDiv: this.builder.group({
                todo: [null, [Validators.required]],
                date: [null, [Validators.required]]
            })
        });
    }

    downloadData() {
        this.dataService.saveToFile(JSON.stringify(this.table));
    }

    uploadData(event: any) {


    }

    removeAllRow() {
        this.table.clearList();
    }

    @ViewChild("file")
    selectorFile: ElementRef;

    userPasswordValidator(control: FormControl): { [s: string]: boolean } {

        const password = control.value;
        const regExp = new RegExp('^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]{8,}$');

        if (regExp.test(password)) {
            return null;
        }
        return {'todo': true};
    }

    userEmailValidator(control: FormControl): { [s: string]: boolean } {

        const password = control.value;
        const regExp = new RegExp('^(([^<>()\\[\\]\\.,;:\\s@\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$');

        if (regExp.test(password)) {
            return null;
        }
        return {'todo': true};
    }

}
