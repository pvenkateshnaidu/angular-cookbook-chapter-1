import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss'],
})
export class NotificationsManagerComponent implements OnInit {
  @Input() notificationManagerCount = 0;
  @Output() countChanged = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  addNotification() {
    this.notificationManagerCount++;
    this.countChanged.emit(this.notificationManagerCount);
  }

  removeNotification() {
    if (this.notificationManagerCount == 0) {
      return;
    }
    this.notificationManagerCount--;
    this.countChanged.emit(this.notificationManagerCount);
  }

  resetCount() {
    this.notificationManagerCount = 0;
    this.countChanged.emit(this.notificationManagerCount);
  }
}
