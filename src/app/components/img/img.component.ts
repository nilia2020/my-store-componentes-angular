import { outputAst } from '@angular/compiler';
import { Component, Input, Output, EventEmitter, OnInit, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy  {
  @Input() img: string = ''
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/img_avatar.png'

  constructor() {
    //before render
    // async forbiden - run once
    console.log('constructor', 'imgValue =>', this.img)
  }
  ngOnChanges() {
    //before render and after render
    //inputs changes survillance - any time what an input update
    console.log('ngOnChanges', 'imgValue =>', this.img)
  }

  ngOnInit(): void {
    // before render
    // async is permitted -- once
    console.log('ngOnInit', 'imgValue =>', this.img)
  }

  ngAfterViewInit(): void {
    //after render
    //handle children
    console.log('ngAfterViewInit', 'imgValue =>', this.img)
  }

  ngOnDestroy(): void {
    //component is eliminated
    console.log('ngOnDestroy', 'imgValue =>', this.img)
  }

  imgError() {
    this.img = this.imageDefault;
  }
  imgLoaded() {
    console.log('load en el hijo');
    this.loaded.emit(this.img);
  }
}
