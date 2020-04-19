import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  displayedColumns: string[] = ['position', 'title', 'name', 'date'];
  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }
}
