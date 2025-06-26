import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-qualifications',
  imports: [
    MatCardModule,
    MatChipsModule,
    MatDividerModule
  ],
  templateUrl: './qualifications.component.html',
  styleUrl: './qualifications.component.scss'
})
export class QualificationsComponent {

}
