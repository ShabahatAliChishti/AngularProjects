import {Component} from '@angular/core'
//decorators enhance elements of our class

@Component({
selector:'app-server',
//relative path
templateUrl:'./server.component.html',
styles:[
    `.online{
        color:white;
    }
    `
]
})
export class ServerComponent{
serverId:number=10;
serverStatus:string='offline'


constructor()
{
    this.serverStatus=Math.random()>0.5?'online':'offline'
}
getServerStatus()
{
    return this.serverStatus;
}
getColor()
{
    return this.serverStatus==='online'?'green':'red';
}
}