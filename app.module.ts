import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {TableComponent} from "./table.component";


@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
    declarations: [AppComponent, TableComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}