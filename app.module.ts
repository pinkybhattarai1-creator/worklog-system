import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { CreateWorklogComponent } from './create-worklog/create-worklog.component';
import { ReadWorklogComponent } from './read-worklog/read-worklog.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { WorklogService } from './worklog.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CreateWorklogComponent,
    ReadWorklogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WorklogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
