import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service } from 'src/app/service/card-service';
import { contactService } from '../../service/contact-service';

@Component({
  selector: 'app-threesheet',
  templateUrl: './threesheet.component.html'
})
export class ThreesheetComponent implements OnInit {
  threesheet:any;
  item:any;
  
  customerForm: FormGroup;

  constructor(private fb: FormBuilder,private crudService: Service,private contactService: contactService) {
    this.crudService.get_cards().subscribe(data => {
      this.threesheet =  data.filter(
        data => data.payload.doc.data()['description4'] == "" && data.payload.doc.data()['description5']==""
      )
      .map(e => {
       return {
            id: e.payload.doc.id,
            time: e.payload.doc.data()['time'],
            description1: e.payload.doc.data()['description1'],
            description2: e.payload.doc.data()['description2'],
            description3: e.payload.doc.data()['description3'],
            description4: e.payload.doc.data()['description4'],
            description5: e.payload.doc.data()['description5'],
            order: e.payload.doc.data()['order'],          
          }
        })
      }); 
   }


   ngOnInit() {
    
    this.customerForm=this.fb.group(
      {
        'name':['',[Validators.required]],
        'phone' :['',[Validators.required,Validators.minLength(6)]],
        'address':['',[Validators.required]],
        'description1':'',
        'description2':'',
        'description3':'',
        'description4':'',
        'description5':'',
        'time':''


      }
    )
   }

   
   change_order(recorddata){
    if(this.customerForm.valid){
     let record ={};
     record['order']=1;
     this.crudService.update_cards(recorddata.id,record);
    } 
  }

  get name(){
   return this.customerForm.get('name');
 }

 get phone(){
   return this.customerForm.get('phone');
 }

 get address(){
   return this.customerForm.get('address')
 };

 choose_item(item){
   this.item = item;
 }

 buy(item){
   if(this.customerForm.valid){
     
     let time = new Date();
     this.customerForm.controls.description1.setValue(this.item.description1);
     this.customerForm.controls.description2.setValue(this.item.description2);
     this.customerForm.controls.description3.setValue(this.item.description3);
     this.customerForm.controls.description4.setValue(this.item.description4);
     this.customerForm.controls.description5.setValue(this.item.description5);
     this.customerForm.controls.time.setValue(new Date());
     this.contactService.create_contact(this.customerForm.value);
   }
 }

}

