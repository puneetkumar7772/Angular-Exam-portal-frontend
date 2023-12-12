import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthuserService } from 'src/app/services/authuser.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registrationForm: any = FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userservice: AuthuserService,
    private snackBar: MatSnackBar
  ) {
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cochingName: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmedPassword: ['', Validators.required],
    });
  }

  registerUser() {
    const body = this.registrationForm.value;
    console.log('111111', body);
    this.userservice.userRegister(body).subscribe(
      (res) => {
        console.log('22222', res);
        this.snackBar.open('User Registration successfully', 'Close', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        this.router.navigate(['/login']);
        this.registrationForm.reset();
      },
      (error) => {
        console.log(error);
        if (error.status === 409) {
          this.registrationForm
            .get('email')
            .setErrors({ duplicateEmail: true });
        } else {
          this.snackBar.open('Duplicate Email is not allowed', 'Close', {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        }
      }
    );
  }
}
