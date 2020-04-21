import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BlogComponent } from '../blog/blog.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {
  //pull records from BlogComponent?? records: any[] = BlogComponent

  records: any[] = [
    { id: '1', title: 'Other', name: 'Jazz 11' , year: '2018'},
    { id: '2', title: 'Score', name: 'Jazz 20' , year: '2019'},
    { id: '3', title: 'Audio', name: 'Jazz 4' , year: '2020'},
  ]
  //@ViewChild(MatCheckboxModule, {static: true}) checkbox: MatCheckboxModule;

  constructor() { } //what should go here??

  //checkboxes
  /* checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false; */

  type: string;
  year: string;
  years: string[] = ['2020', '2019', '2018', '2017', '2016', '2015'];

  //method for applying filter to table

  //return filtered table to BlogComponent
  ngOnInit(): void {
  }

  returnTable() {

  }



}
