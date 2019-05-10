import { InjectionToken, ValueProvider } from '@angular/core';
const jQuery: any = new InjectionToken('jQuery');
const jQueryProvider: ValueProvider = { provide: jQuery, useValue: window["$"] };

export { jQuery, jQueryProvider };