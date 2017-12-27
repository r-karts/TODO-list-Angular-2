import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Listing, Response } from '../NestoriaData';

// import {Listing} from "../NestoriaData";

@Injectable()
export class DataService {

    private constUrl: string = `https://api.nestoria.co.uk/api?encoding=json`;

    constructor(private http: HttpClient) {
    }

    requestData(params: HttpParams) {
        return this.http.get(this.constUrl, { params });
    }
    //
    // private subject = new Subject<any>();
    //
    // saveToFile(data: String) {
    //     let blob = new Blob([data], {type: 'text/csv'});
    //     let url = window.URL.createObjectURL(blob);
    //     window.open(url);
    // }
    //
    //
    // downloadFormFile(file: File): Observable<any> {
    //     let fileReader = new FileReader();
    //     fileReader.onload = (evt: any) => {
    //         this.subject.next(evt.target.result);
    //     };
    //     fileReader.readAsText(file, 'UTF-8');
    //     return this.subject;
    // }


}
