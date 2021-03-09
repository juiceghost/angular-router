import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})



export class TemplateFormComponent implements OnInit {
  constructor() { }
  @ViewChild('contactForm') contactForm: NgForm;

  title = 'Template driven forms';
  contact: contact;
  countryList:country[] = [
    new country('1', 'Norway'),
    new country('2', 'Denmark'),
    new country('3', 'Sweden')
  ];

  onSubmit() {
    console.log(this.contactForm.value);
  }

  changeAddress() {
    let obj = {
      city: "Bangalore",
      street: "Brigade Road",
      pincode: "600100"
    };
    let address = this.contactForm.controls["address"] as FormGroup
    address.patchValue(obj);
 
  }
 
  changeCountry() {
    this.contactForm.controls["country"].setValue("3");
  }
  reset() {
    this.contactForm.resetForm();
  }
  resetForm() {
    this.contactForm.resetForm();
  }
  patchValue() {
    let obj = {
      firstname: "Dr. No",
      lastname: "Fransson",
      email: "rahul@gmail.com",
    };
 
    this.contactForm.control.patchValue(obj);
 
  }
  
  setDefaults() {
    this.contact = {
      firstname: "Dr. Krille",
      lastname: "Tendulkar",
      email: "sachin@gmail.com",
      gender: "male",
      isMarried: true,
      country: "2",
      address: { city: "Mumbai", street: "Perry Cross Rd", pincode: "400050" }
    };
  }

  ngOnInit(): void {
    this.contact = {
      firstname: "Dr. Krille",
      lastname: "Tendulkar",
      email: "sachin@gmail.com",
      gender: "male",
      isMarried: true,
      country: "2",
      address: { city: "Mumbai", street: "Perry Cross Rd", pincode: "400050" }
    };
    setTimeout(() => { 
      this.contactForm.setValue(this.contact);
    });
  }

}
export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}
export class contact {
  firstname:string;
  lastname:string;
  email:string;
  gender:string;
  isMarried:boolean;
  country:string;
  address: {
    city:string;
    street:string;
    pincode:string;
  }
} 
 
 
