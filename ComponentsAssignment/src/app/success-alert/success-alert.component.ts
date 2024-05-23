import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template:`<p>You are so successfull!</p>
  `,
    styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
