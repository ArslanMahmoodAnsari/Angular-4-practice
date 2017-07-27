import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 
import 'rxjs/add/operator/map';

@Injectable()
export class MyDataService {

  constructor(private http:Http) { }

  fetchData = () => {
  	this.http.get('https://ipinfo.io').map( /*to use .map import => 'rxjs/add/operator/map'*/
  		(response) => response.json())
  	.subscribe(
  		(data) => console.log(data)
  		)
  }

  obj = {
  id: '1',
  name  : "arslan",
  rollNo : '2438'
  }

  success = () => {
   return "successful";
  }

}
