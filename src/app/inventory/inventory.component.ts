import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  title = new BehaviorSubject<string>('OLD TITLE');

  title$ = this.title.asObservable();

  constructor() {}

  ngOnInit() {}

  setTitle() {
    this.title.next('NEW TITLE');
  }
}
