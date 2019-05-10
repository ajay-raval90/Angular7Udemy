import { Directive, ElementRef, Inject, OnInit, Input } from '@angular/core';
import { CKEDITOR, Lodash } from '../common.index';
@Directive({
   selector: '[ckeditor-inline]'
})
export class CkeditorInlineDirective implements OnInit {
   @Input() person: any
   myEl: ElementRef;
   myck: any
   constructor(el: ElementRef, @Inject(CKEDITOR) public CKEDITOR, @Inject(Lodash) public _ld) {
      this.myEl = el;
      this.myck = CKEDITOR;
   }


   ngOnInit(): void {
      let editor = this.myck.inline(this.myEl.nativeElement.id);
      editor.on("instanceReady", () => {
         editor.setData('<h1>  ' + this.person.FirstName + ' ' + this.person.LastName + '</h1>');
      });
   }

}