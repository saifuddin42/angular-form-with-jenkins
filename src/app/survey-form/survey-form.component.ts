import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {
  surveyForm: FormGroup;
  customerFirstNameChanged: boolean = false;
  customerFirstNameControl;
  customerLastNameChanged: boolean = false;
  customerLastNameControl;
  contactemailControl;

  
  constructor(private formBuilder: FormBuilder) { 
    this.buildSurveyForm();
  }

  ngOnInit(): void {
  }

  buildSurveyForm(){
    this.surveyForm = this.formBuilder.group({
    
      customerFirstName: this.formBuilder.control(null, Validators.required),
      customerLastName: this.formBuilder.control(null, Validators.required), // same as above but expects null by default
      addressstreet: this.formBuilder.control(null,Validators.required),
      addresscity: this.formBuilder.control(null,Validators.required),
      addressstate: this.formBuilder.control(null,Validators.required),
      addresszip: this.formBuilder.control(null,Validators.required),
      contactphone: this.formBuilder.control(null,Validators.required),
      contactemail: this.formBuilder.control(null,[Validators.required,Validators.email]),
      like: this.formBuilder.group({
        student: this.formBuilder.control(null),
        location: this.formBuilder.control(null),
        campus: this.formBuilder.control(null),
        dorm: this.formBuilder.control(null),
        sports: this.formBuilder.control(null),
        atmosphere: this.formBuilder.control(null)
      }),

       interest: this.formBuilder.control(null, Validators.required),
       referral: this.formBuilder.control('Likely'),
      // gender: this.formBuilder.control('Male'), // default value setting

      

    });

    this.customerFirstNameControl = this.surveyForm.get('customerFirstName');
    this.customerLastNameControl = this.surveyForm.get('customerLastName');
    this.contactemailControl=this.surveyForm.get('contactemail')
  }

  clearForm(){
    this.surveyForm.reset();
  }

  submitSurveyForm() {
    console.log(this.surveyForm.value);
  }
}
