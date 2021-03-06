import { Component} from '@angular/core';
import { Router } from '@angular/router';
// import { IfStmt } from '@angular/compiler';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {
    '(window:scroll)': 'onScroll($event)'
  }
})
export class HomeComponent {

  isScrolled = false;
  isScrolled1 = false;

  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 2;

  constructor(private router: Router) {
    // document.body.style.overflow = 'hidden';
   }

  onScroll(evt) {//window object can be wrapper in a service but for now we directly use it
    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
    if (this.currPos >= this.changePos) {
      console.log("is scrolled is set to true" + this.currPos);
      if (this.currPos >= 20) {
        this.isScrolled = true;
        this.isScrolled1 = true;

      } else {
        this.isScrolled=false;
      }
    } else {
      console.log("is scrolled is set to false");
      this.isScrolled = false;
      this.isScrolled1 =false;
    }
  }

  }

