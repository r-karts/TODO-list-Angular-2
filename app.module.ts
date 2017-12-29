import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { TileComponent } from './tile/tile.component';
import { FilterComponent } from './filter/filter.component';
import { DataService } from './services/data.service';
import { FilterService } from './services/filtres.service';
import { ListOfPages } from './listOfPages/listOfPages.component';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
    declarations: [AppComponent, TableComponent, TileComponent, FilterComponent, ListOfPages],
    providers : [DataService, FilterService],
    bootstrap: [AppComponent]})
export class AppModule {
}
