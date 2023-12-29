import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { QuizzesService } from "src/app/services/quizzes.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import Swal from "sweetalert2";

@Component({
  selector: "app-view-quizzes",
  templateUrl: "./view-quizzes.component.html",
  styleUrls: ["./view-quizzes.component.css"],
})
export class ViewQuizzesComponent {
  constructor(
    private quizservice: QuizzesService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getQuizzes();
  }
  data: any = [];
  getQuizzes() {
    this.quizservice.viewQuizzes().subscribe((res) => {
      console.log("2222222222", res);
      this.data = res;
      console.log("55555", this.data);
    });
  }

  deleteQuiz(id: number) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't delete this Quiz!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Quiz has been deleted successfully.",
          icon: "success",
        });
        this.quizservice.deleteQuizzes(id).subscribe((res) => {
          console.log("first", res);
          console.log("quiz deleted ");

          this.getQuizzes();
        });
      } else {
        console.log("quiz deletion is failed");
      }
    });
  }

  navigate(id: number) {
    this.router.navigate(["/admin/updatequiz", id]);
  }
  navigateView(id: number) {
    this.router.navigate(["/admin/viewquestion", id]);
  }
}
