import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  obj = {
  id: '1',
  name  : "arslan"
  }
  items = ["node", "angular 4", "mongoDB"];
  arr = ['9','3','5','7','2'];
  check= true;
  newItem = "";
  day = new Date(2017, 7, 8);
  /*add item in an array*/
  pushItem = () => {
  	if(this.newItem != ""){
  	  		this.items.push(this.newItem);
  	  		this.newItem = "";
  	  	}
  }
  /*remove item from an array*/
  removeItem = (index) => {
  	this.items.splice(index,1);
  }

  onSubmit = (user) => {
    console.log(user);
  }

  /*model driven Form*/
  form;

/*  ngOnInit () {
  this.form = new FormGroup({
    firstName : new FormControl("", Validators.compose([
                                    Validators.required,
                                    Validators.minLength(3),
                                    Validators.pattern('[\\w\\-\\s\\/]+')])),
    lastName : new FormControl(""),
    language : new FormControl(""),
  }) 
  }*/
  
  ngOnInit () {
  this.form = new FormGroup({
    decimal : new FormControl(""),
    binary : new FormControl(""),
    hexa : new FormControl(""),
    octal : new FormControl("")
  }) 
  }

  decimalChanged = (oldValue, newValue) => {
    if(newValue != ""){
    this.form.patchValue({binary:parseInt(newValue,10).toString(2)});
    this.form.patchValue({hexa:parseInt(newValue,10).toString(16)});
    this.form.patchValue({octal:parseInt(newValue,10).toString(8)});
    }
    else{
    this.form.patchValue({binary:""});
    this.form.patchValue({hexa:""});
    this.form.patchValue({octal:""});
    }
  }
  b =0;
  o =0;
  h =0;
  binaryChanged = (oldValue, newValue) => {
    this.b += 1;
    if(this.b == 1)
    {
      if(newValue != "")
        this.form.patchValue({decimal:parseInt(newValue,2).toString(10)});
      else
        this.form.patchValue({decimal:""});
      
      this.b = 0;      
    }

  }
  hexaChanged = (oldValue, newValue) => {
    this.h += 1;
    if(this.h == 1)
    {
      if(newValue != "")
        this.form.patchValue({decimal:parseInt(newValue,16).toString(10)});
      else
        this.form.patchValue({decimal:""});
      
      this.h = 0;      
    }
  }
  octalChanged = (oldValue, newValue) => {
    this.o += 1;
    if(this.o == 1)
    {
      if(newValue != "")
        this.form.patchValue({decimal:parseInt(newValue,8).toString(10)});
      else
        this.form.patchValue({decimal:""});
      
      this.o = 0;      
    }
  }

}
