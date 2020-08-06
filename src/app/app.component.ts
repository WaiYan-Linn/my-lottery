import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my-lottery';
  
  adminForm:FormGroup;

  constructor(private fb:FormBuilder) {
    this.adminForm= fb.group(
      {
        'password':''
      }
    )
   }


  ngOnInit(): void {
  } 

}
