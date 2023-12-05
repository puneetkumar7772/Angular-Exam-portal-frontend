import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CategoryService } from "src/app/services/category.service";
import { QuizzesService } from "src/app/services/quizzes.service";

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
    private router: Router
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
      console.log("9999999999", res);
      this.category = res;
      console.log("88888", this.category);
    });
  }

  submitQuiz() {
    const body = this.addQuizForm.value;
    console.log("5555555", body);
    this.quizzeservice.addQuizzes(body).subscribe((res) => {
      console.log("6666666", res);
      console.log("quizze add successfully");
      this.addQuizForm.reset();
      this.router.navigate(["/admin/viewquizzes"]);
    });
  }
}
