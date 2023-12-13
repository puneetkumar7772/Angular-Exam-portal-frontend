import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent {

  constructor(
    private questionservice:QuestionsService,
    private snackBar:MatSnackBar
    ){}

  data:any=[]
  ngOnInit(){
    this.getQuestions()

  }

  getQuestions(){
    this.questionservice.getQuestions().subscribe((res)=>{
      console.log("654646",res)
      this.data=res;
      console.log("4546542",this.data)
    })
  }
  stripHtmlTags(htmlString: string): string {
    const doc = new DOMParser().parseFromString(htmlString, "text/html");
    return doc.body.textContent || "";
  }

  deleteQuestion(id:number){
    this.questionservice.deleteQuestion(id).subscribe((res)=>{
      console.log("4635263",res)
      this.snackBar.open("Question Deleted successfully", "Close", {
        duration: 2000,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
      this.getQuestions()
    })
  }
}
