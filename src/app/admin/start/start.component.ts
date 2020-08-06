import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html'
})
export class StartComponent implements OnInit {

  optionForm: FormGroup;
  
  crudOption:string;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.optionForm = this.fb.group(
      {
        'options': ''
      }
    )
  }

  option(option){
    this.crudOption=option;
    console.log(this.crudOption)
  }

}
