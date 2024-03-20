import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  my_linked_in = 'https://www.linkedin.com/in/vinay-kumar-yadav-14b87b192';
  resume_download_link = 'https://drive.google.com/file/d/1qF24QaI5bpdXsbIDYC3nD9SykuVhGXRw/view?usp=sharing';
  constructor() { }

  ngOnInit(): void {
  }

}
