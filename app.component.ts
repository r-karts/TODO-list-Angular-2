import { Component } from '@angular/core';
import { FilterService } from './services/filtres.service';
import { Listing, IDataRequest, IDataResponse, INestoria } from './NestoriaData';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'purchase-app',
    templateUrl: 'src/app/app.component.html',
    styleUrls: ['src/app/app.component.css']})
export class AppComponent {



    // showLoading : boolean = false;
    // statusTable : boolean = true;
    // networkProblem : boolean = false;
    // listings: Listing[];
    filterProp: IDataRequest;


    // constructor (private filterService : FilterService) {}

    changedFilterProp(filterProp:IDataRequest) {
        this.filterProp = filterProp;

    }


}
