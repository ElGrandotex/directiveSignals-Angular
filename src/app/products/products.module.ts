import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProdyctPageComponent } from './pages/prodyct-page/prodyct-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [

    ProdyctPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ProductsModule { }
