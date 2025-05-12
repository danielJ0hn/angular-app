import { Component, computed, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { ListItemComponent } from "./list-item/list-item.component";

@Component({
  selector: 'app-sidebar',
  imports: [ListItemComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  router = inject(Router);
  SubHeader = input.required<string>();
  AppName = input.required<string>();
  Sections = input<{title: string, id: number}[]>();

  WelcomeMessage = computed(
    () => `Welcome to ${this.SubHeader()} component of ${this.AppName()} application`
  )

  loadSection(id: number) {
    console.log(`Loading section with id: ${id}`);
    this.router.navigate(['content', id]);
  }
}
