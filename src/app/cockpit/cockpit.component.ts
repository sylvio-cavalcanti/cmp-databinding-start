import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  /*
    output() decorator is used to define a property as an event emitter.
    It is also needed to define the emmiter properties as 'new EventEmmitter<data_type>'
    apon declaration of the properties.
    
    Note: must import 'EventEmitter' and 'Output' from angular core
  */

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
 
  /*
    EventEmitter is an object in the Angular framework which allows us to emit our own events.
  */

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(nameInput) {
    console.log(nameInput);
    console.log(nameInput.value);

    
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });

   /*
    The 'emit' method will emit a new event of the type 'serverCreated'
   */
  }

  onAddBlueprint() {
  this.blueprintCreated.emit({
    serverName: this.newServerName,
    serverContent: this.newServerContent
  })
  } 
}
