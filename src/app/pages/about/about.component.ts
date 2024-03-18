import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  token:any;
constructor(private router:Router,private snackBar: MatSnackBar){
  this.token = localStorage.getItem("authToken")
}

  checkLoginOrNot(){
   if(this.token){
    this.router.navigate(['/user'])
   }else{
    this.snackBar.open("You Are Not Login so Login First", "Close", {
      duration: 2000,
      horizontalPosition: "center",
      verticalPosition: "top",
    });
    this.router.navigate(['/login'])
   }
  }
}
