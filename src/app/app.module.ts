import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { MyDataService } from './my-data.service';
import { NewComponentComponent } from './new-component/new-component.component';
import { SortPipe } from './app.sortPipe';
@NgModule({
  declarations: [
    SortPipe,
    AppComponent,
    NewComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
    	{
    		path:'new',
    		component: NewComponentComponent
    	}
    ])
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
