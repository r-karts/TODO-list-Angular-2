import { NgModule, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { TileComponent } from './tile/tile.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
    declarations: [AppComponent, TableComponent, TileComponent, FilterComponent],
    bootstrap: [AppComponent]})
export class AppModule {
}
