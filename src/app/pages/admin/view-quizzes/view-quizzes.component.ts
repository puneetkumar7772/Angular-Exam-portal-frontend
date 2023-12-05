import { Component } from "@angular/core";
import { QuizzesService } from "src/app/services/quizzes.service";

@Component({
  selector: "app-view-quizzes",
  templateUrl: "./view-quizzes.component.html",
  styleUrls: ["./view-quizzes.component.css"],
})
export class ViewQuizzesComponent {
  constructor(private quizservice: QuizzesService) {}

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
    this.quizservice.deleteQuizzes(id).subscribe((res) => {
      console.log("first", res);
      console.log("quiz deleted ");
      this.getQuizzes();
    });
  }
}
