import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpParams } from '@angular/common/http';
import { RequestNestoria } from '../NestoriaData';
// import {Listing, Response} from "../NestoriaData";

@Injectable()
export class FiltresService {

    // constructor(private dataService : DataService) {}
    // place : string, pretty: number,
    // action: string, listingType: string, country: string
    // filterProp : RequestNestoria;
    // setParams(filterProp : RequestNestoria) {
    //     this.filterProp = filterProp;
    //     const params = new HttpParams()
    //         .set('place_name', this.filterProp.placeName)
    //         .set('pretty', this.filterProp.pretty)
    //         .set('action', this.filterProp.action)
    //         .set('listing_type', this.filterProp.listingType)
    //         .set('country', this.filterProp.country);
    //     return this.dataService.requestData(params);
    // }


}
