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
  displayedColumns: string[] = ['id', 'title', 'name', 'date'];
  dataSource: any;

  filter = {
  };
  title: string;
  author: string;

  authors: string[] = ['Qin Quan Lin', 'Amber Li', 'Young Seok', 'Tom Tommy', 'Prof'];
  
  users: any[] = [
    {id: 1, title: 'Music Score 1', author: 'Qin Quan Lin', publishdate: '2018-06-19T07:22Z'},
    {id: 2, title: 'Music Score 2', author: 'Amber Li', publishdate: '2018-06-19T07:22Z'},
    {id: 3, title: 'Music Score 3', author: 'Young Seok', publishdate: '2018-06-19T07:22Z'},
    {id: 4, title: 'Music Score 4', author: 'Tom Tommy', publishdate: '2018-06-19T07:22Z'},
    {id: 5, title: 'Music Score 5', author: 'Prof', publishdate: '2018-06-19T07:22Z'},
];

  constructor(private config: ConfigService, private pagerService: PagerService) { }
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  ngOnInit() {
    this.getPosts();
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.title) {
      console.log(this.title);
      this.dataSource.filter = this.title.trim().toLowerCase();
    }
  }

  getPosts() {
    this.config.getPosts().subscribe( //observable can subscribe
      posts => {
        this.dataSource = new MatTableDataSource<Post>(posts);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

}
