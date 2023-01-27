import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imgParent = '';
  showImage = true;

  onLoad(img: string) {
    console.log('load en el padre', img);
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
