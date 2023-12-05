import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent {

  constructor(private categoryservice:CategoryService){}
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
    this.getCategory()
   })
  }
}
