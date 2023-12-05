import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  addCategoryForm:any = FormGroup

  constructor(private fb:FormBuilder,private categoryservice:CategoryService,private router:Router){
    this.addCategoryForm=this.fb.group({
      category:['',[Validators.required]],
      description:['',[Validators.required]],
    })
}

submitForm(){
  const body = this.addCategoryForm.value
  console.log("+++++++++++",body)
  this.categoryservice.addCategory(body).subscribe((res)=>{
    console.log("---------",res)
  this.router.navigate(['/admin/viewcategory'])

  })
  this.addCategoryForm.reset()
}
}
