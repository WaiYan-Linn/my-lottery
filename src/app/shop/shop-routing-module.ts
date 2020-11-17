import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FivesheetComponent } from './fivesheet/fivesheet.component';
import { ThreesheetComponent } from './threesheet/threesheet.component';

const routes: Routes = [
  
 
      {path:'five-sheet',component:FivesheetComponent},
        
      {path:'three-sheet',component:ThreesheetComponent}
      
      
  

  
  

]


@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ShopRoutingModule {

}
