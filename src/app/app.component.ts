import { Component } from '@angular/core';
import { AuthService } from './core/services/auth/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent {
    title = 'twitter-frontend';
}
