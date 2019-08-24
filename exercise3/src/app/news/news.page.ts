import { Component, OnInit } from '@angular/core';
import { compilePipeFromMetadata } from '@angular/compiler';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  private formData: Object;
  private list: Array<Object>;

  constructor() { 
    this.clearFormData();

    this.list = [];
  }

  addItem(data) {
    this.list.push(data);
    this.clearFormData();
  }

  clearFormData() {
    this.formData = {
      title: "",
      subtitle: "",
    };
  }

  ngOnInit() {
  }

}
