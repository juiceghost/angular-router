import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  constructor() { }
  title = 'Template driven forms';

  countryList:country[] = [
    new country('1', 'Norway'),
    new country('2', 'Denmark'),
    new country('3', 'Sweden')
  ];

  onSubmit(contactForm) {
    console.log(contactForm.value);
  }
  
  ngOnInit(): void {
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
 
