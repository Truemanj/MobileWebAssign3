//Josh Trueman 991257988
import { Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
//Set the date for the footer
export class FooterComponent {
    today: Date;
  constructor() {
    this.today = new Date();
   }
}
