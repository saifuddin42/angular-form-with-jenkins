import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {
  SERVER_URL = "http://35.245.121.250:8080/jersey-quickstart-webapp/webapi/myresource/create";
  uploadForm: FormGroup;  
  customerFirstNameControl;
  customerLastNameControl;
  contactemailControl;
  addressstreetControl;
  addresscityControl;
  addressstateControl;
  addresszipControl;
  contactphoneControl;


  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { 
    
  }


  ngOnInit() {
    this.uploadForm = new FormGroup({
      customerFirstName: new FormControl(null,[Validators.required, Validators.minLength(2),
        Validators.maxLength(30),Validators.pattern("^[a-zA-Z]*$")]),
      customerLastName: new FormControl(null,[Validators.required, Validators.minLength(2),
        Validators.maxLength(30),Validators.pattern("^[a-zA-Z]*$")]), 
      addressstreet: new FormControl(null,Validators.required),
      addresscity: new FormControl(null,Validators.required),
      addressstate: new FormControl(null,Validators.required),
      addresszip: new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(5),Validators.pattern("^[0-9]*$") ]),
      contactphone: new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[0-9]*$") ]),
      contactemail: new FormControl(null,[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      Date: new FormControl(null),
        student: new FormControl(null),
        location: this.formBuilder.control(null),
        campus: this.formBuilder.control(null),
        dorm: this.formBuilder.control(null),
        sports: this.formBuilder.control(null),
        atmosphere: this.formBuilder.control(null),
       interest: this.formBuilder.control('Other'),
       referral: this.formBuilder.control('Likely'),

      

    });

    this.customerFirstNameControl = this.uploadForm.get('customerFirstName');
    this.customerLastNameControl = this.uploadForm.get('customerLastName');
    this.contactemailControl=this.uploadForm.get('contactemail');
    this.addressstreetControl=this.uploadForm.get('addressstreet');
    this.addresscityControl=this.uploadForm.get('addresscity');
    this.addressstateControl=this.uploadForm.get('addressstate');
    this.addresszipControl=this.uploadForm.get('addresszip');
    this.contactphoneControl=this.uploadForm.get('contactphone');
    this.contactemailControl=this.uploadForm.get('contactemail');
    
    
   }

  onSubmit() {
    const formData = new FormData();
    //var n;
    //n = "State=NY&Tel_NO=1234567";
    
    var z;
    z="State="
    var abt_global = "";
    var abt_us = "";
    var  Student =this.uploadForm.get('student').value;
    var Loc =this.uploadForm.get('location').value;
    var campus =this.uploadForm.get('campus').value;
    var dorm =this.uploadForm.get('dorm').value;
    var sports =this.uploadForm.get('sports').value;
    var atmos =this.uploadForm.get('atmosphere').value;
    
    if (Student== null){
      Student = false;
    }
    
    if (Loc== null){
      Loc = false;
    }
    
    if (campus== null){
      campus = false;
    }
    
    if (dorm== null){
      dorm = false;
    }
    
    if (sports== null){
      sports = false;
    }
    
    if (atmos== null){
      atmos = false;
    }
    
    

    if(Student.toString().localeCompare('true') == 0)
    {
      Student = "Student";
    }
    if( Loc.toString().localeCompare('true') == 0)
    {
      Loc = "Location";
    }
    if (campus.toString().localeCompare('true') == 0)
    { campus = "campus";
    }
    if(dorm.toString().localeCompare('true') == 0)
    {
       dorm ="Dorm";
    }
    if(sports.toString().localeCompare('true') == 0) 
    {
      sports = "sports";
    }
    if(atmos.toString().localeCompare('true') == 0)
    {
      atmos = "atmosphere";
    }
        abt_global= abt_us.concat(Student,",",Loc,",",campus,",",dorm,",",sports,",",atmos);



    var res = z.concat(this.uploadForm.get('addressstate').value,
    "&","Tel_NO=",this.uploadForm.get('contactphone').value,
    "&","FirstName=",this.uploadForm.get('customerFirstName').value,
    "&","Lastname=",this.uploadForm.get('customerLastName').value,
    "&","Street_Addr=",this.uploadForm.get('addressstreet').value,
    "&","City=",this.uploadForm.get('addresscity').value,
    "&","Zip=",this.uploadForm.get('addresszip').value,
    "&","E_Mail=",this.uploadForm.get('contactemail').value,
    "&","Dat=",this.uploadForm.get('Date').value,
    "&","Abt_Campus=",abt_global,
    "&","Uni_Ist=",this.uploadForm.get('interest').value,
    "&","Recommendation=",this.uploadForm.get('referral').value);

  /*  formData.append('first_name',this.uploadForm.get('customerFirstName').value);
    formData.append('last_name', this.uploadForm.get('customerLastName').value);
    formData.append('Street_Addr', this.uploadForm.get('addressstreet').value);
    formData.append('City', this.uploadForm.get('addresscity').value);
    formData.append('State', this.uploadForm.get('addressstate').value);
    formData.append('ZIP', this.uploadForm.get('addresszip').value);
    formData.append('Tel_NO', this.uploadForm.get('contactphone').value);
    formData.append('E_Mail', this.uploadForm.get('contactemail').value);
    formData.append('Dat', this.uploadForm.get('Date').value);
    formData.append('Abt_Campus', this.uploadForm.get('student').value);
    formData.append('Uni_Ist', this.uploadForm.get('interest').value);
    formData.append('Recommendation', this.uploadForm.get('referral').value);
    console.log(formData);*/
    //$http.post('/someUrl', data, {headers:{'Content-Type': 'multipart/form-data'}}).then(successCallback, errorCallback);
    this.httpClient.post<any>(this.SERVER_URL,res ,{headers:{'Content-Type': 'application/x-www-form-urlencoded'}}).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );


      
    alert(this.uploadForm.get('student').value);
    //alert(this.uploadForm.get('student').value)
  }
}
