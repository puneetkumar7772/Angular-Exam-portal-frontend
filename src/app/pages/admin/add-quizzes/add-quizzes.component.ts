import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CategoryService } from "src/app/services/category.service";
import { QuizzesService } from "src/app/services/quizzes.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-add-quizzes",
  templateUrl: "./add-quizzes.component.html",
  styleUrls: ["./add-quizzes.component.css"],
})
export class AddQuizzesComponent {
  addQuizForm: any = FormGroup;
  constructor(
    private fb: FormBuilder,
    private categoryservice: CategoryService,
    private quizzeservice: QuizzesService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.addQuizForm = this.fb.group({
      quizzeTitle: ["", [Validators.required]],
      quizzeDescription: ["", [Validators.required]],
      maxMark: ["", [Validators.required]],
      numberOfQuestion: ["", [Validators.required]],
      category: ["", [Validators.required]],
      status: ["", [Validators.required]],
    });
  }

  category: any = [];

  ngOnInit() {
    this.categoryservice.viewCategory().subscribe((res) => {
      this.category = res;
    });
  }

  submitQuiz() {
    const body = this.addQuizForm.value;
    this.quizzeservice.addQuizzes(body).subscribe(
      (res) => {
        this.snackBar.open("Quiz Add successfully", "Close", {
          duration: 2000,
          horizontalPosition: "center",
          verticalPosition: "top",
        });
        this.addQuizForm.reset();
        this.router.navigate(["/admin/viewquizzes"]);
      },
      (error) => {
        if (error.status === 409) {
          this.addQuizForm
            .get("quizzeTitle")
            .setErrors({ duplicatequizzTitle: true });
        } else {
          this.snackBar.open("Duplicate Quiz is not allowed", "Close", {
            duration: 2000,
            horizontalPosition: "center",
            verticalPosition: "top",
          });
        }
      }
    );
  }
}
