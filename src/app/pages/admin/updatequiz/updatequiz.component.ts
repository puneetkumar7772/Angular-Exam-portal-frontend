import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizzesService } from 'src/app/services/quizzes.service';

@Component({
  selector: 'app-updatequiz',
  templateUrl: './updatequiz.component.html',
  styleUrls: ['./updatequiz.component.css']
})
export class UpdatequizComponent {
  updateQuizForm: any = FormGroup;
  constructor(
    private fb: FormBuilder,
    private categoryservice: CategoryService,
    private quizzeservice: QuizzesService,
    private router: Router,
    private route: ActivatedRoute,
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
  data:any;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
       this.quizzeservice.getQuizById(id).subscribe((res) => {
        console.log("888888",res)
        this.data=res;
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
        console.log("first",this.data?.data?.quizzeTitle)
        console.log("second",this.data?.data?.category)
        console.log("44444",this.data)
      });

    });
    this.categoryservice.viewCategory().subscribe((res) => {
      console.log("9999999999", res);
      this.category = res;
      console.log("88888", this.category);
    });
  }

}
