import {Routes} from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";

export const routes: Routes = [
    {path: 'posts', component: ProductListComponent},
    {path: '', redirectTo: 'posts', pathMatch: 'full'}
];
