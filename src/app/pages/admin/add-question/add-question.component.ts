import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { QuestionsService } from "src/app/services/questions.service";

@Component({
  selector: "app-add-question",
  templateUrl: "./add-question.component.html",
  styleUrls: ["./add-question.component.css"],
})
export class AddQuestionComponent {
  public Editor = ClassicEditor;
  addQuestionForm: any = FormGroup;
  dynamicOptions: string[] = [];

  constructor(
    private fb: FormBuilder,
    private questionservice: QuestionsService,
    private snackBar: MatSnackBar
  ) {
    this.addQuestionForm = this.fb.group({
      question: ["", [Validators.required]],
      optionOne: ["", Validators.required],
      optionTwo: ["", Validators.required],
      optionThree: ["", Validators.required],
      optionFour: ["", Validators.required],
      answer: ["", [Validators.required]],
    });
    this.addQuestionForm.valueChanges.subscribe((formValues: any) => {
      this.updateDynamicOptions(formValues);
    });
  }

  updateDynamicOptions(formValues: any) {
    this.dynamicOptions = [
      this.addQuestionForm.value.optionOne,
      this.addQuestionForm.value.optionTwo,
      this.addQuestionForm.value.optionThree,
      this.addQuestionForm.value.optionFour,
    ];
  }

  submitQuestionForm() {
    const body = {
      question: this.addQuestionForm.value.question,
      options: {
        optionOne: this.addQuestionForm.value.optionOne,
        optionTwo: this.addQuestionForm.value.optionTwo,
        optionThree: this.addQuestionForm.value.optionThree,
        optionFour: this.addQuestionForm.value.optionFour,
      },
      answer: this.addQuestionForm.value.answer,
    };
    console.log("11111111111", body);
    this.questionservice.addQuestions(body).subscribe((res) => {
      console.log("222222", res);
      this.snackBar.open("Question Added successfully", "Close", {
        duration: 2000,
        horizontalPosition: "center",
        verticalPosition: "top",
      });

      this.addQuestionForm.reset();
      this.dynamicOptions = [];
    });
  }
}
