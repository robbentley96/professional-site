import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { EmploymentComponent } from './employment/employment.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'qualifications', component: QualificationsComponent},
    { path: 'employment', component: EmploymentComponent},
    { path: 'projects', component: ProjectsComponent},
];
