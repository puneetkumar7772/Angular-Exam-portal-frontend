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
import { AllquizzesComponent } from './pages/user/allquizzes/allquizzes.component';
import { InstructionComponent } from './pages/user/instruction/instruction.component';
import { StartquizComponent } from './pages/user/startquiz/startquiz.component';
import { UpdateCategoryComponent } from './pages/admin/update-category/update-category.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'sidebar',component:SidebarComponent},
{path:'user',component:UserDashboardComponent,
children:[
  {path:'',component:AllquizzesComponent},
  {path:'instructions/:id',component:InstructionComponent},
]},
{path:'startquiz/:id',component:StartquizComponent},

  {path:'admin',component:DashboardComponent,
  children:[
    {path:'',component:AdminHomeComponent},

    {path:'profile',component:ProfileComponent},
    {path:"addcategory",component:AddCategoryComponent},
    {path:"viewcategory",component:ViewCategoriesComponent},
    {path:"updatecategory/:id",component:UpdateCategoryComponent},
    {path:"viewquizzes",component:ViewQuizzesComponent},
    {path:"addquizzes",component:AddQuizzesComponent},
    {path:"updatequiz/:id",component:UpdatequizComponent},
    {path:"viewquestion/:id",component:ViewQuestionComponent},
    {path:"addquestion",component:AddQuestionComponent},
  ],
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
