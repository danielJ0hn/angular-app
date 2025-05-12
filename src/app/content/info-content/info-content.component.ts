import { Component, input } from '@angular/core';

@Component({
  selector: 'app-info-content',
  imports: [],
  templateUrl: './info-content.component.html',
  styleUrl: './info-content.component.scss'
})
export class InfoContentComponent {
  id = input.required()
}
