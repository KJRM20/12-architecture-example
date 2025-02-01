import { UpperCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'lib-menu',
  imports: [RouterLink, RouterLinkActive, UpperCasePipe],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  public items = input<{url: string, text: string}[]>();
}
