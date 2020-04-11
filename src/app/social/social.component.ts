import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  socialsites = <any> {};
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.socialsites = this.getSocialSites();
  }
  getSocialSites() {
    return this.config.getConfig().socialsites;
  }

}
