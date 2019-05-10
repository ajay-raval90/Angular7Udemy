import { InjectionToken, ValueProvider } from '@angular/core';
const CKEDITOR: any = new InjectionToken('lodash');
const CKEDITORProvider: ValueProvider = { provide: CKEDITOR, useValue: window["CKEDITOR"] };

export { CKEDITOR, CKEDITORProvider };