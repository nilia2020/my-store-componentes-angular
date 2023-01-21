import { outputAst } from '@angular/compiler';
import { Component, Input, Output, EventEmitter, OnInit, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy  {
  img: string = '';

  @Input('img')
  set changeImage(newImage: string) {
    this.img = newImage;
    console.log('change just img =>', this.img)
  }
  @Input() alt: string = ''
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/img_avatar.png'
  counter = 0;
  counterFn: number | undefined;
  constructor() {
    //before render
    // async forbiden - run once
    console.log('constructor', 'imgValue =>', this.img)
  }
  ngOnChanges(changes: SimpleChanges) {
    //before render and after render
    //inputs changes survillance - any time what an input update
    console.log('ngOnChanges', 'imgValue =>', this.img)
    console.log('changes', changes)
  }

  ngOnInit(): void {
    // before render
    // async is permitted -- once
    console.log('ngOnInit', 'imgValue =>', this.img)
    this.counterFn = window.setInterval(()=> {
      this.counter += 1;
      console.log('run counter')
    }, 1000)
  }

  ngAfterViewInit(): void {
    //after render
    //handle children
    console.log('ngAfterViewInit', 'imgValue =>', this.img)
  }

  ngOnDestroy(): void {
    //component is eliminated
    console.log('ngOnDestroy', 'imgValue =>', this.img)
    window.clearInterval(this.counterFn)
  }

  imgError() {
    this.img = this.imageDefault;
  }
  imgLoaded() {
    console.log('load en el hijo');
    this.loaded.emit(this.img);
  }
}
