import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
  inputs: ['info']
})
export class ApplicationComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
