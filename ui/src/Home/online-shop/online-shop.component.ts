import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { ListViewTopFilterBlockComponent } from './list-view-top-filter-block/list-view-top-filter-block.component';
import { mockItems } from './mock-items';
import { ShopItemListViewComponent } from './shop-items-list-view/shop-items-list-view.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    ListViewTopFilterBlockComponent,
    ShopItemListViewComponent,
  ],
  selector: 'app-online-shop',
  templateUrl: 'online-shop.component.html',
  styleUrl: 'online-shop.component.scss',
})
export class OnlineShopComponent {
  shopItemEntities = mockItems;
}
