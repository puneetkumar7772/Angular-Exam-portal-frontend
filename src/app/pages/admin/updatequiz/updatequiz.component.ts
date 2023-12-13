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
        console.log("888888", res);
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
        console.log("first", this.data?.data?.quizzeTitle);
        console.log("second", this.data?.data?.category);
        console.log("44444", this.data);
      });
    });
    this.categoryservice.viewCategory().subscribe((res) => {
      console.log("9999999999", res);
      this.category = res;
      console.log("88888", this.category);
    });
  }

  submitUpdatedQuiz() {
    let body = this.updateQuizForm.value;
    console.log("555555", body);
    this.quizzeservice.getQuizByIdAndUpdate(this.id, body).subscribe((res) => {
      console.log("77777777", res);
      console.log("data updated successfully");
      this.snackBar.open("Quiz Updated successfully", "Close", {
        duration: 2000,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
      this.router.navigate(["/admin/viewquizzes"]);
    });
  }
}
