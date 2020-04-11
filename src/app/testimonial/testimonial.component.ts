import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  testimonial = <any>{};
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.testimonial = this.getTestimonial();
  };
  getTestimonial() {
    return this.config.getConfig().testimonial;
  };
}
