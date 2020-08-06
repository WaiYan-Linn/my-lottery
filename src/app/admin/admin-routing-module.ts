import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrudComponent } from './crud/crud.component';
import { MailComponent } from './mail/mail.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {path:'',component:StartComponent, children:[
    {path:'crud',component:CrudComponent},
    {path:'mail',component:MailComponent}
  ]
  }
  

]


@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AdminRoutingModule {

}
