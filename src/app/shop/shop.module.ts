import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from '../admin/admin-routing-module';
import { BackgroundComponent } from './background/background.component';
import { FivesheetComponent } from './fivesheet/fivesheet.component';
import { ShopRoutingModule } from './shop-routing-module';
import { ThreesheetComponent } from './threesheet/threesheet.component';

@NgModule({
    declarations: [
       FivesheetComponent,
       ThreesheetComponent,
       BackgroundComponent,
    ],
    imports: [
      CommonModule,
      ShopRoutingModule,
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule
    ],
    providers:[]

  })
  export class ShopModule { }