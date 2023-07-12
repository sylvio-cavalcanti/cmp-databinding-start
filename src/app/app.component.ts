import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {
      type: 'server',
      name: 'TestServer',
      content: 'Just a test!'
    },
    {
      type: 'server',
      name: 'TestServer 2',
      content: 'Just a test! 2'
    }
  ];
}
