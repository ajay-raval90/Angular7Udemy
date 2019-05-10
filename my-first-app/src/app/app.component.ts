import { Component, Inject } from '@angular/core';
import { Lodash ,CKEDITOR} from './common/common.index';


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
  constructor(@Inject(Lodash) public _ld, @Inject(CKEDITOR) public CKEDITOR) {
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
      return p.FirstName == "Ajay";
    });
  }
}
