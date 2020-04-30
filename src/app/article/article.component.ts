//Young Seok
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute} from '@angular/router';
import { ConfigService } from '../config.service';
import { Post } from '../post';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  post: Post;
  panelOpenState = false;
  constructor(private route: ActivatedRoute, private config: ConfigService, private location: Location,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {

    let id = +this.route.snapshot.paramMap.get('id');
    this.getPostById(id);
    // this.post = this.getPostById(id);
  }

  // because it's observable, we need to subscribe
  getPostById(id: number) {
    return this.config.getPostByID(id).subscribe(
      post => this.post = post
    );
  }

  getBack() {
    this.location.back();
  }
 audio: any = new Audio();
  playAudio(){
    
    this.audio.src = "../../../assets/audio/alarm.wav";
    this.audio.load();
    this.audio.play();
  }
  stopAudio() {
    this.audio.stop();
  }
}

