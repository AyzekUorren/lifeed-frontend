import { Component } from '@angular/core';
import { AuthService } from './core/services/auth/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  constructor(private title: Title) {
    this.title.setTitle('Lifeed');
  }
}
