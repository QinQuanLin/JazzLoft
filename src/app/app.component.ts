// Default app.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My First Page';

  ngOnInit() {
  
  /* Parallax Effects */
	// if (!!(<any>$).prototype.enllax) {
	// 	(<any>$)(window).enllax();
  // }

  }
}
