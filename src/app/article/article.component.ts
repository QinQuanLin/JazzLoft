// Article typescript page has functions such as ngOnInit(), getPostById(), getBack(), playAudio(),pauseAudio()
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
  audio = new Audio();
  constructor(private route: ActivatedRoute, private config: ConfigService, private location: Location,
    private _formBuilder: FormBuilder) { }
//initializes the component
  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.getPostById(id);
  }

  // Bring post information
  getPostById(id: number) {
    return this.config.getPostByID(id).subscribe(
      post => this.post = post
    );
  }
  //function that get back to Archive page
  getBack() {
    this.location.back();
}
  //Play audio that loaded from assets folder
  playAudio(){
    this.audio.src = "../../../assets/audio/lloydtrotman-samtaylor-interview.mp3";
    this.audio.load();
    this.audio.play();
  }
  //Pause playing audio orplay audio if it pasued
  pauseAudio(){
    if(this.audio.paused) {
      this.audio.play();
    }
    else {
      this.audio.pause();
    }
  }
}
