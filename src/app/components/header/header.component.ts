import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TagSettingsComponent } from '../tag-settings/tag-settings.component';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  show = false;

  constructor() {}

  ngOnInit() {}

  toggle() {
    this.show = !this.show;
  }
}
