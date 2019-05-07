import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddTweetComponent } from '../add-tweet/add-tweet.component';

@Component({
    selector: 'tweets',
    templateUrl: './tweets.component.html',
    styleUrls: ['./tweets.component.less'],
})
export class TweetsComponent implements OnInit {
    constructor(public dialog: MatDialog) {}

    ngOnInit() {}

    openDialog(): void {
        const dialogRef = this.dialog.open(AddTweetComponent, {});

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
