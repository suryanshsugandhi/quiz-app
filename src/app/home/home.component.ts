import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private __router: Router) { }

  ngOnInit() {
  }

  redirectToSignup(){
    this.__router.navigate(['/signup'])
  }
}
