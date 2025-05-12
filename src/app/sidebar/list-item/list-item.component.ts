import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  imports: [],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {
  item = input.required<{ title: string, id: number }>();
  idClicked = output<number>();

  onClick() {
    this.idClicked.emit(this.item().id);
  }
}
