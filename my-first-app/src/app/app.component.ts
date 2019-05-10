import { Component, Inject } from '@angular/core';
import { Lodash } from './common/lodash.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   *
   */
  person: any;

  constructor(@Inject(Lodash) public _ld) {


    let people = [
      {
        FirstName: "Ajay",
        LastName: "Raval"
      },
      {
        FirstName: "Shaishav",
        LastName: "Shukla"
      },
      {
        FirstName: "Bholu",
        LastName: "P"
      },
    ];
    this.person = _ld.find(people, function (p) {
      console.log(p);
      return p.FirstName == "Ajay";
    });



  }
}
