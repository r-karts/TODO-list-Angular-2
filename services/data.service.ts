import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    private constUrl: string = `https://api.nestoria.co.uk/api?encoding=json`;

    constructor(private http: HttpClient) {
    }

    requestData(params: HttpParams) {
        return this.http.get(this.constUrl, { params });
    }
}
