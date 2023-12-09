import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { QuizzesService } from "src/app/services/quizzes.service";
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: "app-view-quizzes",
  templateUrl: "./view-quizzes.component.html",
  styleUrls: ["./view-quizzes.component.css"],
})
export class ViewQuizzesComponent {
  constructor(private quizservice: QuizzesService, private router:Router,private snackBar: MatSnackBar) {}

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
      this.snackBar.open('Quiz deleted successfully', 'Close', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      this.getQuizzes();
    });
  }

  navigate(id:number){
    this.router.navigate(['/admin/updatequiz', id]);

    // this.quizservice.getQuizById(id).subscribe((res)=>{
    //   console.log("first",res)
    // })
  }
}
