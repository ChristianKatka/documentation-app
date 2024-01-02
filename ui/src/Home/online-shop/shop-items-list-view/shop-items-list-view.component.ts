import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { CommonModule } from '@angular/common';
import { ShopItemComponent } from './shop-item/shop-item.component';

@Component({
  standalone: true,
  imports: [CommonModule, MaterialModule, ShopItemComponent],
  selector: 'app-shop-items-list-view',
  templateUrl: 'shop-items-list-view.component.html',
  styleUrls: ['shop-items-list-view.component.scss'],
})
export class ShopItemListViewComponent {
  @Input()
  shopItemEntities: any[] = [];

  @Output()
  addItemToShoppingCart = new EventEmitter();
}
