import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpParams } from '@angular/common/http';
import { IDataRequest } from '../NestoriaData';

@Injectable()
export class FilterService {

    constructor(private dataService : DataService) {}

    setParams(filterProp : IDataRequest) {
        const params = new HttpParams()
            .set('place_name', filterProp.placeName)
            .set('pretty', filterProp.pretty)
            .set('action', filterProp.action)
            .set('listing_type', filterProp.listingType)
            .set('country', filterProp.country)
            .set('page', filterProp.page);
        return this.dataService.requestData(params);
    }


}
