import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Config {
  name: string;
  age: number;
}


@Injectable()
export class DisplayService {

 // configUrl = 'assets/testing.json';

  constructor(private httpClient: HttpClient) {

   }

   public getNews(){
    console.log("insidegeNews");
    return this.httpClient.get('http://ec2-3-90-139-158.compute-1.amazonaws.com/jersey-quickstart-webapp/webapi/myresource');
    
  }

  /*getConfig() {
    console.log("Did I reach here???");
    return this.httpClient.get(this.configUrl);
  }*/
  
  

}
