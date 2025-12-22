import { Component } from '@angular/core';
import { MatDrawer, MatDrawerContainer } from '@angular/material/sidenav';
import { MatButton } from '@angular/material/button';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [
    MatButton,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    RouterLink
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {

}
