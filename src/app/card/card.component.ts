import { Component, Input } from '@angular/core';
import { Card } from '../card';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  @Input() item!:Card

  constructor(public dialog:MatDialog) {}

  renderBox(item:Card) {
    const dialogRef = this.dialog.open(DialogComponent, {data:item})
  }
}

