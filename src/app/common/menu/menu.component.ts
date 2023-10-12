import { Component } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  selectedItem: string | null = 'schedule';
  isMenuOpen: boolean = true;

  ngAfterViewInit() {
    feather.replace();
  }

  select(item: string) {
    this.selectedItem = this.selectedItem = item;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
