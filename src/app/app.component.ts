import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

declare let $: any


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = "Linn";
  
  adminForm:FormGroup;

  constructor(private fb:FormBuilder) {
    this.adminForm= fb.group(
      {
        'password':''
      }
    )
   }
  ngAfterViewInit(): void {

    $(document).mouseleave(function(){
      $(".navbar-collapse").collapse('hide');
  });

  $(document).scroll(function(){
    $(".navbar-collapse").collapse('hide');
  });

  
  $(document).click(function(){
    $(".navbar-collapse").collapse('hide');
});


  $("#navbarCollapse").blur(function(){
    $(".navbar-collapse").collapse('hide');
});

    $("#navbarCollapse").mouseleave(function(){
      $(".navbar-collapse").collapse('hide');
    });

    

    
 

    $('.navbar-collapse a').click(function(){
      $(".navbar-collapse").collapse('hide');
  });

  }


  ngOnInit(): void {
  } 

 

}
