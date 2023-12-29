import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { QuestionsService } from "src/app/services/questions.service";
import Swal from "sweetalert2";

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

    Swal.fire({
      title: "Are you sure?",
      text: "You won't delete this Question!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Question has been deleted successfully.",
          icon: "success",
        });
        this.questionservice.deleteQuestion(id).subscribe((res) => {
          console.log("4635263", res);
          this.getQuestions();
        });
        
      } else {
        console.log("Question deletion is failed");
      }
    });
    
  }

  navigateUrl(quizID: string) {
    this.router.navigate(["admin/addquestion", quizID]);
  }
}
