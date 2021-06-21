import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent implements OnInit {

  constructor() { }
  display = false;
  active = false;
  img: any;
  imgZ: any;
  imgZoom: any


  ngOnInit() {
    this.img = document.getElementById('image');
    this.imgZ = document.getElementById('container');
    this.imgZoom = document.getElementById('img-zoom');
  }

  @HostListener('mouseover') onMouseOver() {

  }

  setActive = () => {
    this.active = !this.active;
  }

  onEnter = (e) => {
    let zoom = 3
    this.display = true;
    this.imgZ.style.backgroundRepeat = 'no-repeat';
    this.imgZ.style.backgroundSize =
      (this.img as any).width * zoom + 'px ' + (this.img as any).height * zoom + 'px';


    this.imgZoom.style.backgroundImage = "url('" + this.img.src + "')";

    this.imgZoom.style.backgroundRepeat = 'no-repeat';
    this.imgZoom.style.backgroundSize =
      this.img.width * zoom + 'px ' + this.img.height * zoom + 'px';

    let cx = this.imgZ.offsetWidth / this.imgZoom.offsetWidth;
    let cy = this.imgZ.offsetHeight / this.imgZoom.offsetHeight;
  }

  onExit = (e) => {
    this.display = false;
    this.imgZ.style.backgroundImage = "url('none')";
  }

  onOver = (e) => {
    this.imgZ.style.backgroundImage = "url('" + (this.img as any).src + "')";
  }

  onMove = (e) => {
    //console.log(e)
  }

}
