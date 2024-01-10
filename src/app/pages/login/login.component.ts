import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { AuthuserService } from 'src/app/services/authuser.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginUserForm: any = FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authservice: AuthuserService
  ) {
    this.loginUserForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  loginUser() {
    const body = this.loginUserForm.value;
    console.log('second', body);
    this.authservice.loginUser(body).subscribe((res) => {
      console.log('first', res);
      const token = res.token;
      localStorage.setItem('authToken', token);
      const decodedToken: any = jwtDecode(token);
      const role = decodedToken.role;
      if (role === 'User') {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Admin Login successfully',
          showConfirmButton: false,
          timer: 2000,
        });
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/user']);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'User Login successfully',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  }
}
