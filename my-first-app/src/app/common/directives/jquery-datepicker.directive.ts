import { Directive, ElementRef, Inject, OnInit, Input } from '@angular/core';
import { jQuery } from '../common.index';
import { $ } from 'protractor';

@Directive({
   selector: '[date-picker]'
})
export class JqueryDatePicker implements OnInit {
   myEl: ElementRef;
   jq:any
   constructor(el: ElementRef, @Inject(jQuery) public $) {
      this.myEl = el;  
      this.jq = $
   }
   ngOnInit(): void {
      this.jq(this.myEl.nativeElement).datepicker();
   }

}