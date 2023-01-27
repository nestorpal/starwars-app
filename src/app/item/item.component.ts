import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() character: any;
  @Output() assignedSide = new EventEmitter<{ name: string, side: string }>();

  constructor() { }

  ngOnInit(): void { }

  onAssign(side: string) {
    // this.character.side = side; // simplest way but not recommend for future maintenance. Instead centralize logic in tabs component
    this.assignedSide.emit({ ...this.character, side: side });
  }
}
