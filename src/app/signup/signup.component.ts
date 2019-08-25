import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private __router: Router) { }

  ngOnInit() {
  }

  redirectToRules(){
    this.__router.navigate(['/rules']);
  }
}
