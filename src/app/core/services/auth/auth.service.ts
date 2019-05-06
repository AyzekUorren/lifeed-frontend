import { UserIntreface } from '../../intefaces/api/signup.interface';
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { GlobalProvider } from '../global.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SignInInterface } from '../../intefaces/api/signin.inteface';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends ApiService {
  constructor(http: HttpClient, global: GlobalProvider) {
    super(http, global);
    this.setSettings({
      url: `${environment.API_PATH}${environment.API_PREFIX}/auth`,
      isDelete: false,
      isGet: true,
      isPost: true,
      isPut: false,
    });
  }

  public SignIn(authUser: SignInInterface) {
    return this.makeRequest('POST', { url: '/signin', body: authUser });
  }

  public SignUp(newUser: UserIntreface) {
    return this.makeRequest('POST', { url: '/signup', body: newUser });
  }

  public GetAuthUser() {
    return this.makeRequest('GET', { url: '' });
  }
}
