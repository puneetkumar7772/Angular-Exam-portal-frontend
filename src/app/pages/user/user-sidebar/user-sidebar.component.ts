import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent {

  constructor(private categoryservice:CategoryService){}

  ngOnInit(){
    this.getCategory()
  }


data:any=[]
  getCategory(){
    this.categoryservice.viewCategory().subscribe((res)=>{
      console.log(res);
      this.data=res;
      console.log("777777",this.data)
    })
  }

}
