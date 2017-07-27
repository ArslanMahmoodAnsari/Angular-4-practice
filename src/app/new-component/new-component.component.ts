import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../my-data.service';
@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  constructor(private newService:MyDataService ) { }

  ngOnInit() {
      console.log(this.newService.obj.name);
  }

}
