import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyInputComponent } from './my-input/my-input.component';
import { FormsModule } from '@angular/forms';
import { TaskColorComponent } from './task-color/task-color.component';
import { ButtonsComponent } from './buttons/buttons.component';

import { HttpClientModule } from '@angular/common/http';

import { MyPipe } from './my-pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyInputComponent,
    TaskColorComponent,
    ButtonsComponent,
    MyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
