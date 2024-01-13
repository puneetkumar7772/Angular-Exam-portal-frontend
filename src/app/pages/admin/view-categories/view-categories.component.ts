import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent {

  constructor(private categoryservice:CategoryService,private snackBar: MatSnackBar,private router:Router){}
  data:any=[]
  ngOnInit(){
this.getCategory()
  }

  getCategory(){
    this.categoryservice.viewCategory().subscribe((res)=>{
      console.log("=======",res)
      this.data=res;
      console.log("99999",this.data)
    })
  }

  deleteCategory(id:number){

    Swal.fire({
      title: "Are you sure?",
      text: "You won't delete this Quiz!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Quiz has been deleted successfully.",
          icon: "success",
        });
        this.categoryservice.deleteCategory(id).subscribe((res)=>{
          console.log("-------",res)
          this.getCategory()
         })
      } else {
        console.log("quiz deletion is failed");
      }
    });
  }

  navigate(id:number){
    this.router.navigate(['/admin/updatecategory',id])

  }
}
