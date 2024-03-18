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
import { UserlistComponent } from './pages/admin/userlist/userlist.component';
import { AuthGuard } from './authgaurd.guard';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sidebar', component: SidebarComponent },
  {
    path: 'user',
    component: UserDashboardComponent,
    children: [
      { path: '', component: AllquizzesComponent },
      { path: 'instructions/:id', component: InstructionComponent },
    ],
  },
  { path: 'startquiz/:id', component: StartquizComponent },

  {
    path: 'admin',
    component: DashboardComponent,
    children: [
      { path: '', component: AdminHomeComponent , canActivate: [AuthGuard]},

      { path: 'profile', component: ProfileComponent,canActivate: [AuthGuard] },
      { path: 'addcategory', component: AddCategoryComponent,canActivate: [AuthGuard] },
      { path: 'viewcategory', component: ViewCategoriesComponent,canActivate: [AuthGuard] },
      { path: 'updatecategory/:id', component: UpdateCategoryComponent,canActivate: [AuthGuard] },
      { path: 'viewquizzes', component: ViewQuizzesComponent ,canActivate: [AuthGuard]},
      { path: 'addquizzes', component: AddQuizzesComponent,canActivate: [AuthGuard] },
      { path: 'updatequiz/:id', component: UpdatequizComponent,canActivate: [AuthGuard] },
      { path: 'viewquestion/:id', component: ViewQuestionComponent,canActivate: [AuthGuard] },
      { path: 'addquestion/:id', component: AddQuestionComponent,canActivate: [AuthGuard] },
      { path: 'userlist', component: UserlistComponent,canActivate: [AuthGuard] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
