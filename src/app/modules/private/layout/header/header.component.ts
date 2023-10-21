import { Component } from '@angular/core';
import { SidebarService } from '../sidebar/services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private sidebarService: SidebarService
    ) { }

  toggleSidebar(): void {
    this.sidebarService.toggleSidebar();
  }

  logout(): void {
   
  }

}