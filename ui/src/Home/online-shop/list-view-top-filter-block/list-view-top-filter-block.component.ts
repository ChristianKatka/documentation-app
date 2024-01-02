import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';

@Component({
  standalone: true,
  imports: [MaterialModule],
  selector: 'app-list-view-top-filter-block',
  templateUrl: 'list-view-top-filter-block.component.html',
  styleUrls: ['list-view-top-filter-block.component.scss'],
})
export class ListViewTopFilterBlockComponent {}
