//Function for displaying Archive page
import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfigService } from '../config.service';
import { Post } from '../post';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  filterValues = {};
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'title', 'arranger','artist' ,'publishdate'];

  filterSelectObj = [];
  constructor(
  ) {

    // Object to create Filter for
    this.filterSelectObj = [
      {
        name: 'ID',
        columnProp: 'id',
        options: []
      }, {
        name: 'TITLE',
        columnProp: 'title',
        options: []
      }, {
        name: 'ARRANGER',
        columnProp: 'arranger',
        options: []
      },
      {
        name: 'ARTIST',
        columnProp: 'artist',
        options: []
      }, {
        name: 'DATE',
        columnProp: 'publishdate',
        options: []
      }
    ]
  }
  //enables usage of paginator and sort functions
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  //initializes the component
  ngOnInit() {
    this.getRemoteData();

    // Overrides default filter behaviour of Material Datatable
    this.dataSource.filterPredicate = this.createFilter();
  }

  // Gets unique values from columns to build filter
  getFilterObject(fullObj, key) {
    const uniqChk = [];
    fullObj.filter((obj) => {
      if (!uniqChk.includes(obj[key])) {
        uniqChk.push(obj[key]);
      }
      return obj;
    });
    return uniqChk;
  }

  // Gets remote dummy data to populate table
  getRemoteData() {

    const remoteDummyData = [
      {"id": 1, "title": 'Interview', "arranger": 'Lioyd Trotman', "artist": 'Sam Taylor', "publishdate": '2018-06-19T07:22Z', "image": ""},
        {"id": 2,  "title": 'Music 1', "arranger": 'Qin Quan Lin', "artist": 'Qin Quan Li', "publishdate": '2018-06-19T07:22Z'},
        {"id": 3, "title": 'Music 2', "arranger": 'Amber Li', "artist": 'Anoymous', "publishdate": '2018-06-19T07:22Z'},
        {"id": 4, "title": 'Music 3', "arranger": 'Young Seok Seo', "artist": 'Anoymous', "publishdate": '2018-06-19T07:22Z'},
        {"id": 5, "title": 'Music 4', "arranger": 'Tom Tommy', "artist": 'Anoymous', "publishdate": '2018-06-19T07:22Z'},
        {"id": 6, "title": 'Music 5', "arranger": 'Prof', "artist": 'Anoymous', "publishdate": '2018-06-19T07:22Z'},
        {"id": 7, "title": 'Music 6', "arranger": 'Anoymous', "artist": 'Anoymous', "publishdate": '2018-06-19T07:22Z'},
        {"id": 8, "title": 'Music 7', "arranger": 'Anoymous', "artist": 'Anoymous', "publishdate": '2018-06-19T07:22Z'},
        {"id": 9, "title": 'music 8', "arranger": 'Anoymous', "artist": 'Anoymous', "publishdate": '2018-06-19T07:22Z'},
        {"id": 10, "title": 'Music 9', "arranger": 'Anoymous', "artist": 'Anoymous', "publishdate": '2018-06-19T07:22Z'},
        {"id": 11, "title": 'Music 10', "arranger": 'Anoymous', "artist": 'Anoymous', "publishdate": '2018-06-19T07:22Z'},
    ];
    this.dataSource.data = remoteDummyData;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    //generates filter options using data in table
    this.filterSelectObj.filter((o) => {
      o.options = this.getFilterObject(remoteDummyData, o.columnProp);
    });
  }

  // Called on Filter change
  filterChange(filter, event) {
    //let filterValues = {}
    this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase()
    this.dataSource.filter = JSON.stringify(this.filterValues)
  }

  // Custom filter method fot Angular Material Datatable
  createFilter() {
    let filterFunction = function (data: any, filter: string): boolean {
      let searchTerms = JSON.parse(filter);
      let isFilterSet = false;
      for (const col in searchTerms) {
        if (searchTerms[col].toString() !== '') {
          isFilterSet = true;
        } else {
          delete searchTerms[col];
        }
      }

      console.log(searchTerms);

      let nameSearch = () => {
        let found = false;
        if (isFilterSet) {
          for (const col in searchTerms) {
            searchTerms[col].trim().toLowerCase().split(' ').forEach(word => {
              if (data[col].toString().toLowerCase().indexOf(word) != -1 && isFilterSet) {
                found = true
              }
            });
          }
          return found
        } else {
          return true;
        }
      }
      return nameSearch()
    }
    return filterFunction
  }


  // Reset table filters
  resetFilters() {
    this.filterValues = {}
    this.filterSelectObj.forEach((value, key) => {
      value.modelValue = undefined;
    })
    this.dataSource.filter = "";
  }
}
