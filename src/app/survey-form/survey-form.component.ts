import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {
  SERVER_URL = "http://ec2-3-90-139-158.compute-1.amazonaws.com/jersey-quickstart-webapp/webapi/myresource/create";
  uploadForm: FormGroup;  

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { 
    
  }


  ngOnInit() {
    this.uploadForm = new FormGroup({
      customerFirstName: new FormControl(null,Validators.required),
      customerLastName: new FormControl(null,Validators.required), // same as above but expects null by default
      addressstreet: new FormControl(null),
      addresscity: new FormControl(null),
      addressstate: new FormControl(null),
      addresszip: new FormControl(null),
      contactphone: new FormControl(null),
      contactemail: new FormControl(null),
      Date: new FormControl(null),
        student: this.formBuilder.control(null),
        location: this.formBuilder.control(null),
        campus: this.formBuilder.control(null),
        dorm: this.formBuilder.control(null),
        sports: this.formBuilder.control(null),
<<<<<<< HEAD
        atmosphere: this.formBuilder.control(null)
      }),
=======
        atmosphere: this.formBuilder.control(null),
>>>>>>> ae4d34c0b05091eb6178c96bdbfc740ad9d28e98
       interest: this.formBuilder.control(null, Validators.required),
       referral: this.formBuilder.control('Likely')
    });

    
   }

  onSubmit() {
    const formData = new FormData();
    //var n;
    //n = "State=NY&Tel_NO=1234567";
    var z;
    z="State="

    var res = z.concat(this.uploadForm.get('addressstate').value,
    "&","Tel_NO=",this.uploadForm.get('contactphone').value,
    "&","FirstName=",this.uploadForm.get('customerFirstName').value,
    "&","Lastname=",this.uploadForm.get('customerLastName').value,
    "&","Street_Addr=",this.uploadForm.get('addressstreet').value,
    "&","City=",this.uploadForm.get('addresscity').value,
    "&","Zip=",this.uploadForm.get('addresszip').value,
    "&","E_Mail=",this.uploadForm.get('contactemail').value,
    "&","Dat=",this.uploadForm.get('Date').value,
    "&","Abt_Campus=",this.uploadForm.get('student').value,
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

    alert(res);
    //alert(this.uploadForm.get('student').value)
  }
}
