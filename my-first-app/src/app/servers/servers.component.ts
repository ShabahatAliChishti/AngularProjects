import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector:'[app-servers]',
  // selector:'.app-servers',
  // template: `<app-server></app-server>
  // <app-server></app-server>`,
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewUser=false;
  serverCreationStatus="No server is created";
  serverName='Testserver';
  serverCreated=false;
  servers=['Testserver','Testserver 2']
  constructor() {
    setTimeout(() => {
      this.allowNewUser=true;
    }, 2000);
   }

  ngOnInit(): void {
  }
  onCreateServer()
  {
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus="Server was created";
  }
  onUpdateServerName(event:Event)
  {
    //here we do explicited casting
      this.serverName=(<HTMLInputElement>event.target).value;
  }

}
