import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LodashProvider, CKEDITORProvider, jQueryProvider } from './common/common.index';
import { CkeditorInlineDirective } from './common/directives/ckeditor-inline.directive';
import { JqueryDatePicker } from './common/directives/jquery-datepicker.directive';


@NgModule({
  declarations: [
    AppComponent,
    CkeditorInlineDirective,
    JqueryDatePicker
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    LodashProvider,
    CKEDITORProvider,
    jQueryProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
