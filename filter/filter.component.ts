import { Component } from '@angular/core';
import { IDataRequest } from '../NestoriaData';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'filter-comp',
    templateUrl: 'src/app/filter/filter.component.html',
    styleUrls: ['src/app/filter/filter.component.css']})

export class FilterComponent {

    filterForm : FormGroup;
    searchForm : FormGroup;
    errMsgCountry : string = 'Input name country';
    errMsgPlace : string = 'Input full name place';


    pretty: string = '1';
    action: string = 'search_listings';
    placeName: string = 'london';
    listingType: string = 'buy';
    country: string = 'uk';
    filterProp : IDataRequest = <IDataRequest>{};

    constructor(private router: Router, private formBuilder: FormBuilder) {
        this.searchForm = this.formBuilder.group({
            country : ['',Validators.required],
            place : ['',Validators.required],
            listType : ['buy',Validators.required],

        });

        this.filterForm = this.formBuilder.group({
            bathMin : [''],
            bathMax : [''],
            bedMin : [''],
            bedMax : [''],
            priceMin : [''],
            priceMax : [''],
        });
    }

    applyFilter() {
        this.filterProp.action = this.action;
        this.filterProp.placeName = this.placeName;
        this.filterProp.country = this.country;
        this.filterProp.listingType = this.listingType;
        this.filterProp.pretty = this.pretty;
        this.filterProp.page = '1';
        //  кроме If ни чего лучше не придумал что бы не кидать пустые переменные в строку запроса
        if (this.filterForm.get('priceMin').value)
            this.filterProp.priceMin = this.filterForm.get('priceMin').value;
        if (this.filterForm.get('priceMax').value)
            this.filterProp.priceMax = this.filterForm.get('priceMax').value;
        if (this.filterForm.get('bedMax').value)
            this.filterProp.bedroomMax = this.filterForm.get('bedMax').value;
        if (this.filterForm.get('bedMin').value)
            this.filterProp.bedroomMin = this.filterForm.get('bedMin').value;
        if (this.filterForm.get('bathMax').value)
            this.filterProp.bathroomMax = this.filterForm.get('bathMax').value;
        if (this.filterForm.get('bathMin').value)
            this.filterProp.bathroomMin = this.filterForm.get('bathMin').value;

        this.router.navigate(['/sale'], {
            queryParams: this.filterProp,
        });

    }

    applySearch() {
        this.filterProp = <IDataRequest>{};
        this.filterProp.action = this.action;
        this.filterProp.placeName = this.searchForm.get('place').value;
        this.filterProp.country = this.searchForm.get('country').value;
        this.filterProp.listingType = this.searchForm.get('listType').value;
        this.filterProp.pretty = this.pretty;
        this.filterProp.page = '1';

        this.router.navigate(['/sale'], {
            queryParams: this.filterProp,
        });
    }

}
