import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LodashProvider } from './common/lodash.token';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LodashProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
