import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive-example';

  data : any = {
    name: 'Prashant Pimpale',
    gender: 'Male',
    salary: '10$'};
}