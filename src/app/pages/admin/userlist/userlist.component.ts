import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AuthuserService } from "src/app/services/authuser.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-userlist",
  templateUrl: "./userlist.component.html",
  styleUrls: ["./userlist.component.css"],
})
export class UserlistComponent {
  constructor(
    private userservice: AuthuserService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getUser();
  }
  data: any = [];
  getUser() {
    this.userservice.getUser().subscribe((res) => {
      this.data = res;
    });
  }

  deleteUser(id: number) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't delete this user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "User has been deleted successfully.",
          icon: "success",
        });
        this.userservice.deleteUser(id).subscribe((res) => {
          this.getUser();
        });
      }
    });
  }
}
