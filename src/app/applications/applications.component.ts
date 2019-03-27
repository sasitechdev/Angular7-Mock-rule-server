import { Component, OnInit } from '@angular/core';
import { ApplicationsService } from '../applications.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent {

  title = "List of Applications";
  applications;

  constructor(service: ApplicationsService) {
    this.applications = service.getApplications();
  }
  


}
