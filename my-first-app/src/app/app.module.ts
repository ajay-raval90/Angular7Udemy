import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LodashProvider, CKEDITORProvider } from './common/common.index';
import { CkeditorInlineDirective } from './common/directives/ckeditor-inline.directive';


@NgModule({
  declarations: [
    AppComponent,
    CkeditorInlineDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LodashProvider,
    CKEDITORProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
