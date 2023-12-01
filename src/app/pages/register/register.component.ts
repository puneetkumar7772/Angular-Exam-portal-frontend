import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registrationForm: FormGroup;

constructor(private fb:FormBuilder,private router:Router){
   this.registrationForm = this.fb.group ({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cochingName: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    })
}
data: FormData[] = [];

registerUser(){
  this.data=this.registrationForm.value
  console.log('000000000',this.data)
  localStorage.setItem('user',JSON.stringify(this.data))
  console.log("first",localStorage.setItem('user',JSON.stringify(this.data)))
  this.router.navigate(['/login']);

}

}
