import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent {

  constructor(private categoryservice:CategoryService,private snackBar: MatSnackBar){}
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
   this.categoryservice.deleteCategory(id).subscribe((res)=>{
    console.log("-------",res)
    this.snackBar.open('Category deleted successfully', 'Close', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
    this.getCategory()
   })
  }
}
