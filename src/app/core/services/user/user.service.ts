import { UserIntreface } from './../../intefaces/api/signup.interface';
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { GlobalProvider } from '../global.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IdInteface } from '../../intefaces/api/id.inteface';

@Injectable({
  providedIn: 'root',
})
export class UserService extends ApiService {
  constructor(http: HttpClient, global: GlobalProvider) {
    super(http, global);
    this.setSettings({
      url: `${environment.API_PATH}${environment.API_PREFIX}/user`,
      isDelete: true,
      isGet: true,
      isPost: false,
      isPut: true,
    });
  }

  public GetUsers() {
    return this.makeRequest('GET', { url: '' });
  }

  public GetUser(id: IdInteface) {
    return this.makeRequest('GET', { url: `/${id}` });
  }

  public UpdateUser(id: IdInteface, updatedUser: UserIntreface) {
    return this.makeRequest('PUT', { url: `/${id}`, body: updatedUser });
  }

  public RemoveUser(id: IdInteface) {
    return this.makeRequest('DELETE', { url: `/${id}` });
  }
}
