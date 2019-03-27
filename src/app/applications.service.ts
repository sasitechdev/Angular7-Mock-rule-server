import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  constructor() { }

  getApplications() {
    let applications = [
      {
        id: 0,
        name: "default",
        noOfRules: 12
      },
      {
        id: 1,
        name: "ondot",
        noOfRules: 12
      }, {
        id: 2,
        name: "oscas",
        noOfRules: 5
      }, {
        id: 3,
        name: "cardinal",
        noOfRules: 4
      }, {
        id: 3,
        name: "cardinal",
        noOfRules: 4
      }, {
        id: 3,
        name: "cardinal",
        noOfRules: 4
      }, {
        id: 3,
        name: "cardinal",
        noOfRules: 4
      }
    ];
    return applications;
  }
}
