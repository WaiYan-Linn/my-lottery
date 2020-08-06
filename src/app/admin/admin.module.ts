import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing-module';
import { CrudComponent } from './crud/crud.component';
import { MailComponent } from './mail/mail.component';
import { StartComponent } from './start/start.component';

@NgModule({
    declarations: [
        StartComponent,
        CrudComponent,
        MailComponent
    ],
    imports: [
      CommonModule,
      AdminRoutingModule,
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule
    ],
    providers:[]

  })
  export class AdminModule { }
