import { outputAst } from '@angular/compiler';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  @Input() img: string = ''
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/img_avatar.png'
  imgError() {
    this.img = this.imageDefault;
  }
  imgLoaded() {
    console.log('load en el hijo');
    this.loaded.emit(this.img);
  }
}
