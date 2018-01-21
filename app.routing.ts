import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
    { path: 'sale', component: TableComponent },
    { path: 'lazy', loadChildren : 'app/lazy/lazy.module#LazyModule' }];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
