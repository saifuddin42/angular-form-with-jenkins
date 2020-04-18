import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Config {
  name: string;
  age: number;
}


@Injectable()
export class DisplayService {

  configUrl = 'assets/testing.json';

  constructor(private httpClient: HttpClient) {

   }

  getConfig() {
    console.log("Did I reach here???");
    return this.httpClient.get(this.configUrl);
  }
  
  

}
