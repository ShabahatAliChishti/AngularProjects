import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecret=false;
  log:Date[]=[];
  onToggleDisplay()
  {
    this.showSecret=!this.showSecret;
    this.log.push(new Date());
  }
}
