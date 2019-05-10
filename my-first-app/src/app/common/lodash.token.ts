import { InjectionToken, ValueProvider } from '@angular/core';



const Lodash: any = new InjectionToken('lodash');
const LodashProvider: ValueProvider = { provide: Lodash, useValue: window["_"] };

export { Lodash, LodashProvider };