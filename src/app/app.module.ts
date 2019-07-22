import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AndyHttpComponent } from './andy-http/andy-http.component';
import { AndyDisplayComponent } from './andy-display/andy-display.component';

@NgModule({
  declarations: [
    AppComponent,
    AndyHttpComponent,
    AndyDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule // <-- right here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
