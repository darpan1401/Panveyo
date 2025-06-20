import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';

export const routes: Routes = [
    {path:'' , component:HomeComponent},
    {path:'products',component:ProductsComponent},
    {path:'about',component:AboutComponent},
    {path:'contact', component:GetStartedComponent},
    { path: '**', redirectTo: '' }

];


