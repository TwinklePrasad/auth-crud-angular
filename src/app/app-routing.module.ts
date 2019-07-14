import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employes/employee/employee.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PrfileComponent } from './prfile/prfile.component';
import { ProductComponent } from './product/product.component';
const routes: Routes = [
  {path: '', redirectTo:'admin', pathMatch:'full' },
  {path:"register",component:RegisterComponent},
  { path:'login',component:LoginComponent},
 
  {path:'profile',component:PrfileComponent},
  {path:'admin', canActivate: [AuthGuard],component:HeaderComponent ,
  children:[
    {path:'', redirectTo:'dashboard', pathMatch:'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'product',component:ProductComponent},
   
     
    
     
    
     
      ]},
      
];


// {path:'dashboard',component:DashboardComponent},
// {path:'employee',component:EmployeeComponent}
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing = [  DashboardComponent,
  EmployeeComponent,HeaderComponent,LoginComponent,RegisterComponent,ProductComponent]
