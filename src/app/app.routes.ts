import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { EmployeesComponent } from './employees/employees.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'jobs',
    component: JobsComponent,
    title: 'Jobs',
  },
  {
    path: 'employees',
    component: EmployeesComponent,
    title: 'Employees',
  },
];
