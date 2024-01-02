import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  standalone: true,
  imports: [CommonModule, MaterialModule],
  selector: 'app-user-list',
  templateUrl: 'user-list.component.html',
  styleUrl: 'user-list.component.scss',
})
export class UserListComponent {}
