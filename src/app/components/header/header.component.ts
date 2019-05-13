import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TagSettingsComponent } from '../tag-settings/tag-settings.component';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  show = false;

  constructor(public dialog: MatDialog, public title: Title) {}

  ngOnInit() {}

  toggle() {
    this.show = !this.show;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TagSettingsComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
