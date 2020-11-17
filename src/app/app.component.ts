import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

declare let $: any


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "Linn";
  
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

  click(){
        $('.navbar-collapse a').click(function(){
            $(".navbar-collapse").collapse('hide');
        });
  }

}
