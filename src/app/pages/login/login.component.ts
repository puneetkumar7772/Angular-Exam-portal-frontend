import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginUserForm:any =FormGroup;
  constructor(private fb:FormBuilder,private router:Router){
    this.loginUserForm=this.fb.group({
      username:['',(Validators.required)],
      password:['',(Validators.required)],
    })
  }

  loginUser(){
    const body=this.loginUserForm.value
    console.log("second",body)
    this.router.navigate(['/'])
  }
}
