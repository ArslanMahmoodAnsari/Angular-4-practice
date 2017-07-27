import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
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
    RouterModule.forRoot([
    	{
    		path:'new',
    		component: NewComponentComponent
    	}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
