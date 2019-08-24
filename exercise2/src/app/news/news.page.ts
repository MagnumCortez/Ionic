import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  private image: String;
  private card: Object;

  constructor() { 
    this.card = {
      title: "Ionic Security",
      subtitle: "@IonicSecurity ‏",
      content: "Accelerating Internet trust by protecting and controlling data everywhere it travels and anywhere it resides.",
    }

    this.image = "/assets/image.png";
  }

  ngOnInit() {
  }

}
