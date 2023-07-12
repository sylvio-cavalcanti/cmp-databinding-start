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

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    // 'serverData' in the parameter is tue values emited from the child component 'cockpit'
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content:  blueprintData.serverContent,
    });
  } 
}
