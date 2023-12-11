import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizzesService } from 'src/app/services/quizzes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent {
  quizData:any={}

  constructor(private quizservice:QuizzesService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(){
    const quizID=this.route.snapshot.params['id']
    console.log("first",quizID)

    this.quizservice.getQuizById(quizID).subscribe((res)=>{
      console.log("888888888",res)
      this.quizData=res;
      console.log("222222",this.quizData)
    })
  }

  startQuiz(id:number){
    Swal.fire({
      title: "Are you sure?",
      text: "If you want to start this quiz then you are not able to redirect to home page unless you complete the test.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "start"
    }).then((result) => {
      if (result.isConfirmed) {
      this.router.navigate(['/startquiz/',id])
      }
    });

  }
}
