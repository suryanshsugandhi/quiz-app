import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component'
import { Router } from '@angular/router'
import { SignupService } from '../services/signup.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private __router: Router, private signupService: SignupService) { }

  ngOnInit() {
  }

  redirectToRules(){
    this.__router.navigate(['/rules']);
  }

  signInWithFB(){
    this.signupService.facebookLogin()
    .subscribe((response)=>{console.log(response)});
  }

  signInWithGoogle(){
    this.signupService.googleLogin()
    .subscribe((response)=>{
      console.log(response);
    })
  }
}
