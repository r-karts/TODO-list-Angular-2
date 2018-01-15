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
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './content/main-content.component';
import { PopupHouseComponent } from  './popup house/popup-house.component';

const appRoutes: Routes = [
    { path: 'sale', component: TableComponent }];

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule,
        HttpClientModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, MainContentComponent, TableComponent, PopupHouseComponent,
        TileComponent, FilterComponent, ListOfPages],
    providers: [DataService, FilterService],
    bootstrap: [AppComponent],
})
export class AppModule {
}
