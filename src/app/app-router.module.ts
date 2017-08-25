
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductLijstComponent} from './product-lijst/product-lijst.component';
import {UrenLijstComponent} from './uren-lijst/uren-lijst.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/producten', pathMatch: 'full'},
  {path: 'producten', component: ProductLijstComponent },
  {path: 'uren', component: UrenLijstComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouterModule {
}
