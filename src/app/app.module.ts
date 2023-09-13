import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyproductComponent } from './myproduct/myproduct.component';
import {HttpClientModule} from '@angular/common/http';
import { FilterdataPipe } from './pipes/filterdata.pipe'
import { FormsModule } from '@angular/forms';
import { ReaddataComponent } from './readdata/readdata.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  declarations: [
    AppComponent,
    MyproductComponent,
    FilterdataPipe,
    ReaddataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule, BrowserAnimationsModule,MatButtonModule,MatCardModule,MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
