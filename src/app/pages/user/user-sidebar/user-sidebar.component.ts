import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent {

  constructor(private categoryservice:CategoryService,private route:ActivatedRoute){}
  categoryName:any
  ngOnInit(){
    this.getCategory()
    this.route.paramMap.subscribe((params) => {
      this.categoryName = params.get('category');
      console.log('shfdgxcjv,', this.categoryName);
    });
  }


data:any=[]
  getCategory(){
    this.categoryservice.viewCategory().subscribe((res)=>{
      console.log(res);
      this.data=res;
      console.log("777777",this.data)
    })
  }

  categoryNameData(category:string ){
console.log("2222222222",category)
  }

}
