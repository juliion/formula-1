import { Component } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  isMenuOpen: boolean = true;

  ngAfterViewInit() {
    feather.replace();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
