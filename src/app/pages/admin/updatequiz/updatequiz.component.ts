import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { CategoryService } from "src/app/services/category.service";
import { QuizzesService } from "src/app/services/quizzes.service";

@Component({
  selector: "app-updatequiz",
  templateUrl: "./updatequiz.component.html",
  styleUrls: ["./updatequiz.component.css"],
})
export class UpdatequizComponent {
  updateQuizForm: any = FormGroup;
  id: any;
  constructor(
    private fb: FormBuilder,
    private categoryservice: CategoryService,
    private quizzeservice: QuizzesService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.updateQuizForm = this.fb.group({
      quizzeTitle: ["", [Validators.required]],
      quizzeDescription: ["", [Validators.required]],
      maxMark: ["", [Validators.required]],
      numberOfQuestion: ["", [Validators.required]],
      category: ["", [Validators.required]],
      status: ["", [Validators.required]],
    });
  }

  category: any = [];
  data: any;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params["id"];
      this.quizzeservice.getQuizById(this.id).subscribe((res) => {
        this.data = res;
        if (this.data?.data) {
          this.updateQuizForm.patchValue({
            quizzeTitle: this.data.data.quizzeTitle,
            quizzeDescription: this.data.data.quizzeDescription,
            maxMark: this.data.data.maxMark,
            numberOfQuestion: this.data.data.numberOfQuestion,
            category: this.data.data.category,
            status: this.data.data.status,
          });
        }
      });
    });
    this.categoryservice.viewCategory().subscribe((res) => {
      this.category = res;
    });
  }

  submitUpdatedQuiz() {
    let body = this.updateQuizForm.value;
    this.quizzeservice.getQuizByIdAndUpdate(this.id, body).subscribe((res) => {
      this.snackBar.open("Quiz Updated successfully", "Close", {
        duration: 2000,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
      this.router.navigate(["/admin/viewquizzes"]);
    });
  }
}
