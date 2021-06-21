import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-view-zoom',
  templateUrl: './image-view-zoom.component.html',
  styleUrls: ['./image-view-zoom.component.css']
})
export class ImageViewZoomComponent implements OnInit {
  image: any;
  imageZoomView: any;
  imageZoomTracker: any
  zoom = 4;
  boxZoomSize = 10
  cx: any;
  cy: any;
  displayZoom = false;

  constructor() { }

  ngOnInit() {
    this.image = document.getElementById('image');
    this.imageZoomView = document.getElementById('container');
    this.imageZoomTracker = document.getElementById('img-zoom');
    this.applyTracker();
    this.displayZoom = false;
  }

  applyChanges = () => {
    if (!this.displayZoom)
      return;
    this.applyTracker();
  }

  applyTracker = () => {
    this.imageZoomTracker.style.backgroundImage = "url('" + this.image.src + "')";

    this.imageZoomTracker.style.backgroundRepeat = 'no-repeat';
    this.imageZoomTracker.style.backgroundSize =
      this.image.width * this.zoom + 'px ' + this.image.height * this.zoom + 'px';

    this.cx = this.imageZoomView.offsetWidth / this.imageZoomTracker.offsetWidth;
    this.cy = this.imageZoomView.offsetHeight / this.imageZoomTracker.offsetHeight;
  }

  onEnter = (e) => {
    this.imageZoomView.style.backgroundImage = "url('" + this.image.src + "')";
    this.imageZoomView.style.backgroundSize =
      this.image.width * this.cx + 'px ' + this.image.height * this.cy + 'px';
  }

  onExit = (e) => {
    var none = '';
    this.imageZoomTracker.style.backgroundImage = "url('" + none + "')";
    this.imageZoomView.style.backgroundImage = "url('" + none + "')";
  }

  onMove = (e) => {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = this.getCursorPos(e);
    /* Calculate the position of the lens: */
    x = pos.x - this.imageZoomTracker.offsetWidth / 2;
    y = pos.y - this.imageZoomTracker.offsetHeight / 2;
    /* Prevent the lens from being positioned outside the image: */
    if (x > this.image.width - this.imageZoomTracker.offsetWidth) {
      x = this.image.width - this.imageZoomTracker.offsetWidth;
    }
    if (x < 0) {
      x = 0;
    }
    if (y > this.image.height - this.imageZoomTracker.offsetHeight) {
      y = this.image.height - this.imageZoomTracker.offsetHeight;
    }
    if (y < 0) {
      y = 0;
    }
    /* Set the position of the lens: */
    this.imageZoomTracker.style.left = x + 'px';
    this.imageZoomTracker.style.top = y + 'px';
    /* Display what the lens "sees": */
    this.imageZoomView.style.backgroundPosition = '-' + x * this.cx + 'px -' + y * this.cy + 'px';
  }

  setActive = () => {
    this.displayZoom = !this.displayZoom;
  }

  getCursorPos(e) {
    var a,
      x = 0,
      y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = this.image.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }

}
