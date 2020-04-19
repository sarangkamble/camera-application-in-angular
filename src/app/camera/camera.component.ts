import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements ngAfterViewInit {

  @ViewChild('video') video;


  constructor() { }

  ngAfterViewInit() {
    const videoElement: HTMLVideoElement = this.video.nativeElement;

    navigator.mediaDevices.getUserMedia({
      video: {facingMode: 'user'}
    }).then(stream => {
      videoElement.srcObject = stream;
    })
  }

}