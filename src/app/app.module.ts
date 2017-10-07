import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageUploadModule } from "angular2-image-upload";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { DataserviceService } from "./dataservice.service";
import { HttpModule } from "@angular/http";
import { DataTableModule } from "angular2-datatable";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
          CommonModule,
    BrowserModule,
    ImageUploadModule.forRoot(),
    FormsModule,
     HttpModule,
     ReactiveFormsModule,
     DataTableModule,

  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
