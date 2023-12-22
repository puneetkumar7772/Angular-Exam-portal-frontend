import { Component } from "@angular/core";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { AuthuserService } from "src/app/services/authuser.service";

@Component({
  selector: "app-userlist",
  templateUrl: "./userlist.component.html",
  styleUrls: ["./userlist.component.css"],
})
export class UserlistComponent {
  constructor(private userservice: AuthuserService,private snackBar:MatSnackBar) {}

  ngOnInit(){
    this.getUser()
  }
  data: any = [];
  getUser() {
    this.userservice.getUser().subscribe((res) => {
      console.log("232626", res);
      this.data = res;
      console.log("9865455", this.data);
    });
  }

  deleteUser(id:number){
    console.log("user deleted successfully")
    console.log("11111",id)
    this.userservice.deleteUser(id).subscribe((res)=>{
      console.log("45468468",res)
      this.snackBar.open('User deleted successfully', 'Close', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      this.getUser();

    })
  }
}
