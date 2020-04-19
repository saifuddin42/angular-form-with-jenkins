import { Component, OnInit } from '@angular/core';
import { DisplayService, Config } from '../displayservice.service';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  config: { name: any; age: any;  };
  surveys: any;

  constructor(private displayService: DisplayService) { }

  ngOnInit() {
    console.log("outside getNews")
    this.displayService.getNews().subscribe((data)=>{
      console.log(data);
      this.surveys= data;
      console.log(this.surveys);
    });
      
  //  this.showConfig();
  }


  /*showConfig() {
    console.log("kya be babluuuuu");
    this.displayService.getConfig()
      .subscribe(
        (data: Config) => this.config = { ...data } // success path
      );
  }*/

  // showConfig() {
  //   this.displayService.getConfig()
  //     .subscribe((data: Config) => this.config = {
  //         name: data['name'],
  //         age:  data['age']
  //     });
  // }

}
