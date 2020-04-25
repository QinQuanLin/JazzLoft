import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfigService } from '../config.service';
import { PagerService } from '../pager.service';
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
  displayedColumns: string[] = ['id', 'title', 'author', 'publishdate'];

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
        name: 'AUTHOR',
        columnProp: 'author',
        options: []
      }, {
        name: 'DATE',
        columnProp: 'publishdate',
        options: []
      }
    ]
  }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.getRemoteData();

    // Overrride default filter behaviour of Material Datatable
    this.dataSource.filterPredicate = this.createFilter();
  }

  // Get Uniqu values from columns to build filter
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

  // Get remote serve data using HTTP call
  getRemoteData() {

    const remoteDummyData = [
      {"id": 1, "title": 'Music Score 1', "author": 'QinQuanLin', "publishdate": '2018-06-19T07:22Z'},
        {"id": 2, "title": 'Music Score2', "author": 'AmberLi', "publishdate": '2018-06-19T07:22Z'},
        {"id": 3, "title": 'MusicScore3', "author": 'Young Seok', "publishdate": '2018-06-19T07:22Z'},
        {"id": 4, "title": 'MusicScore4', "author": 'Tom Tommy', "publishdate": '2018-06-19T07:22Z'},
        {"id": 5, "title": 'MusicScore5', "author": 'Prof', "publishdate": '2018-06-19T07:22Z'},
        {"id": 6, "title": 'Music Score 6', "author": 'QuanLin', "publishdate": '2018-06-19T07:22Z'},
        {"id": 7, "title": 'Music Score 7', "author": 'LinQuan', "publishdate": '2018-06-19T07:22Z'},
        {"id": 8, "title": 'Music Score 8', "author": 'LinQinQuan', "publishdate": '2018-06-19T07:22Z'},
        {"id": 9, "title": 'Music Score 9', "author": 'QuanLinQuan', "publishdate": '2018-06-19T07:22Z'},
        {"id": 10, "title": 'Music Score 10', "author": 'QuanLin', "publishdate": '2018-06-19T07:22Z'},
        {"id": 11, "title": 'Music Score 11', "author": 'LinLinQin', "publishdate": '2018-06-19T07:22Z'},
    ];
    this.dataSource.data = remoteDummyData;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

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