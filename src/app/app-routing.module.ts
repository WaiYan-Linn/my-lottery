import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './Menu/menu.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'',redirectTo:"/welcome",pathMatch:"full"},
  {path:'welcome',component: WelcomeComponent},
  {path:'contact',component: ContactComponent},
  {path:'shop',component: MenuComponent },
  {path:'admin', loadChildren:()=> import('./admin/admin.module').then(m => m.AdminModule) },
  {path:'shop',  loadChildren:()=> import('./shop/shop.module').then(m => m.ShopModule) },
  {path:'thank-you',component:ThankyouComponent}
 
   
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
