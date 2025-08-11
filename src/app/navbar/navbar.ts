import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  userScroll: boolean = false;

  @HostListener('window:scroll')
  scroll(): void {
    this.userScroll = window.scrollY > 20;
  }
}
