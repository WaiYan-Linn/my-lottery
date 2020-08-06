import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { DesignComponent } from './design/design.component';
import { ServiceComponent } from './services/services.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const routes: Routes = [
  {path:'',redirectTo:"/welcome",pathMatch:"full"},
  {path:'welcome',component: DesignComponent},
  {path:'contact',component: ContactComponent},
  {path:'services',component: ServiceComponent},
  {path:'admin', loadChildren:()=> import('./admin/admin.module').then(m => m.AdminModule) },
  {path:'shop',  loadChildren:()=> import('./shop/shop.module').then(m => m.ShopModule) },
  {path:'thank-you',component:ThankyouComponent}
 
   
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
