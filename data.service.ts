import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {HttpClientModule} from "@angular/common/http";

@Injectable()
export class DataService {

    constructor(private http: HttpClientModule) {}

    private subject = new Subject<any>();

    saveToFile(data: String) {
        let blob = new Blob([data], {type: 'text/csv'});
        let url = window.URL.createObjectURL(blob);
        window.open(url);
    }


    downloadFormFile(file: File): Observable<any> {
        let fileReader = new FileReader();
        fileReader.onload = (evt: any) => {
            this.subject.next(evt.target.result);
        };
        fileReader.readAsText(file, 'UTF-8');
        return this.subject;
    }




}