import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { QuestionsService } from "src/app/services/questions.service";

@Component({
  selector: "app-view-question",
  templateUrl: "./view-question.component.html",
  styleUrls: ["./view-question.component.css"],
})
export class ViewQuestionComponent {
  constructor(
    private questionservice: QuestionsService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  quizID: any;

  data: any = [];
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.quizID = params.get("id");
      console.log("shfdgxcjv,", this.quizID);
    });
    this.getQuestions();

  }

  getQuestions() {
    const id=this.quizID
    console.log("first",id)
    this.questionservice.getQuestionsbyQuizId(this.quizID).subscribe((res) => {
      console.log("654646", res);
      this.data = res;
      console.log("4546542", this.data);
    });
  }
  stripHtmlTags(htmlString: string): string {
    const doc = new DOMParser().parseFromString(htmlString, "text/html");
    return doc.body.textContent || "";
  }

  deleteQuestion(id: number) {
    this.questionservice.deleteQuestion(id).subscribe((res) => {
      console.log("4635263", res);
      this.snackBar.open("Question Deleted successfully", "Close", {
        duration: 2000,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
      this.getQuestions();
    });
  }

  navigateUrl(quizID: string) {
    this.router.navigate(["admin/addquestion", quizID]);
  }
}
