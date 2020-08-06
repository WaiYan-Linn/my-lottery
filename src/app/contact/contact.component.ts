import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { contactService } from '../service/contact-service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder,private contactService : contactService) {
    this.contactForm=fb.group(
      {
        'name' :['',[Validators.required]],
        'phone' :['',[Validators.required,Validators.minLength(6)]],
        'address' :['',[Validators.required]],
        'message' : ['',Validators.required],
        'time':''

      }
    );

   
   }

  ngOnInit(): void {
    
  }

  get name(){
    return this.contactForm.get('name');
  }

  get phone(){
    return this.contactForm.get('phone');
  }

  get address(){
    return this.contactForm.get('address')
  };

  get message(){
    return this.contactForm.get('message')
  };

  create_info(){
     if(this.contactForm.valid){
      let time = new Date();
      this.contactForm.controls.time.setValue(new Date());

      this.contactService.create_contact(this.contactForm.value);
     }
     
 }
   
}
