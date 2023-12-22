import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-startquiz',
  templateUrl: './startquiz.component.html',
  styleUrls: ['./startquiz.component.css'],
})
export class StartquizComponent {
  constructor(
    private Locationstrategy: LocationStrategy,
    private questionservice: QuestionsService,
    private route: ActivatedRoute
  ) {}
  quizID: any;
  data: any = [];
  correctAnswer = 0;
  marksGot = 0;
  attamptQuestion = 0;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.quizID = params.get('id');
      console.log('shfdgxcjv,', this.quizID);
    });
    this.preventBackButton();
    this.getQuestion();
  }

  preventBackButton() {
    history.pushState(null, location.href);
    this.Locationstrategy.onPopState(() => {
      history.pushState(null, location.href);
    });
  }

  getQuestion() {
    this.questionservice.getQuestionsbyQuizId(this.quizID).subscribe((res) => {
      console.log('2222222', res);
      this.data = res;
      this.data.forEach((q: any) => {
        q['givenAnswer'] = '';
      });
      console.log('546566', this.data);
      console.log('first', res);
    });
  }

  stripHtmlTags(htmlString: string): string {
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    return doc.body.textContent || '';
  }

  submitQuiz() {
    {
      Swal.fire({
        title: 'Do you want submit hte quiz',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        denyButtonText: "Don't save",
        icon: 'info',
      }).then((e) => {
        if (e.isConfirmed) {
          this.data.forEach((p: { answer: any; givenAnswer: any }) => {
            if (p.answer == p.givenAnswer) {
            this.correctAnswer++;
            let marks =this.data.length
            console.log("max marks",marks)
            //  this.marksGot+=marks
            }
          });
          console.log('Correct Answers:', this.correctAnswer);

        }
      });
    }
  }
}
