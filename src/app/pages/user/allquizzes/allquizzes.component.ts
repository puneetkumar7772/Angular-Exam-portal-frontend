import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzesService } from 'src/app/services/quizzes.service';

@Component({
  selector: 'app-allquizzes',
  templateUrl: './allquizzes.component.html',
  styleUrls: ['./allquizzes.component.css']
})
export class AllquizzesComponent {

  constructor(private quizservice:QuizzesService,private router:Router){}

  data:any;
  ngOnInit(){
    this.allQuizes()
  }

  allQuizes(){
    this.quizservice.viewQuizzes().subscribe((res)=>{
      console.log("111111111111",res);
      this.data=res;
      console.log("8888888",this.data)
    })
  }
 navigate(id:number){
  this.router.navigate(['/user/instructions',id])
 }
}
