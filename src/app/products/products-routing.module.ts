import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdyctPageComponent } from './pages/prodyct-page/prodyct-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'product', component: ProdyctPageComponent},
      {path: '**', redirectTo:'product'}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
