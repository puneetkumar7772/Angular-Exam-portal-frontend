import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizzesComponent } from './pages/admin/add-quizzes/add-quizzes.component';
import { UpdatequizComponent } from './pages/admin/updatequiz/updatequiz.component';
import { ViewQuestionComponent } from './pages/admin/view-question/view-question.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'sidebar',component:SidebarComponent},
{path:'user',component:UserDashboardComponent},

  {path:'admin',component:DashboardComponent,
  children:[
    {path:'',component:AdminHomeComponent},

    {path:'profile',component:ProfileComponent},
    {path:"addcategory",component:AddCategoryComponent},
    {path:"viewcategory",component:ViewCategoriesComponent},
    {path:"viewquizzes",component:ViewQuizzesComponent},
    {path:"addquizzes",component:AddQuizzesComponent},
    {path:"updatequiz/:id",component:UpdatequizComponent},
    {path:"viewquestion",component:ViewQuestionComponent},
    {path:"addquestion",component:AddQuestionComponent},
  ],
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
