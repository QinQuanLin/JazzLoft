//File for links on navigation bar
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})

export class NavmenuComponent implements OnInit {

  @Input() menu: any;
  @Input() menuopen: boolean;
  @Output() toggleMenu: EventEmitter<any>= new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  changeStatus($event) {
    this.toggleMenu.emit(!this.menuopen);
  }

}
