import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // Native has the same effect as None, but it uses the ShadowDom instead. Emulated is the default value
  encapsulation: ViewEncapsulation.Emulated // None, Native 
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {
    type: string, 
    name: string,
    content: string,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
