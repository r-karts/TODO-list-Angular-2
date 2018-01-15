import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpParams } from '@angular/common/http';
import { IDataRequest } from '../NestoriaData';

@Injectable()
export class FilterService {

    constructor(private dataService : DataService) {}

    setParams(filterProp : IDataRequest) {
        let params = new HttpParams()
            .set('place_name', filterProp.placeName)
            .set('pretty', filterProp.pretty)
            .set('action', filterProp.action)
            .set('listing_type', filterProp.listingType)
            .set('country', filterProp.country)
            .set('page', filterProp.page);
        if (filterProp.bedroomMin)
            params = params.append('bedroom_min', filterProp.bedroomMin);
        if (filterProp.bedroomMax)
            params = params.append('bedroom_max', filterProp.bedroomMax);
        if (filterProp.bathroomMin)
            params = params.append('bathroom_min', filterProp.bathroomMin);
        if (filterProp.bathroomMax)
            params = params.append('bathroom_max', filterProp.bathroomMax);
        if (filterProp.priceMin)
            params = params.append('price_min', filterProp.priceMin);
        if (filterProp.priceMax)
            params = params.append('price_max', filterProp.priceMax);

        return this.dataService.requestData(params);
    }


}
