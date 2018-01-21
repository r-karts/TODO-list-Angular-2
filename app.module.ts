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
import { MainContentComponent } from './content/main-content.component';
import { PopupHouseComponent } from './popup house/popup-house.component';
import { ErrorPopupDirective } from './directives/popup error/error-popup.directive';
import { routing } from './app.routing';


@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule,
        HttpClientModule, routing],
    declarations: [AppComponent, MainContentComponent, TableComponent, PopupHouseComponent,
        TileComponent, FilterComponent, ListOfPages, ErrorPopupDirective],
    providers: [DataService, FilterService],
    bootstrap: [AppComponent],
})
export class AppModule {
}
