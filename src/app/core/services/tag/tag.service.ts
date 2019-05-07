import { TagInterface } from '../../intefaces/api/tag.interface';
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { GlobalProvider } from '../global.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { IdInteface } from '../../intefaces/api/id.inteface';

@Injectable({
  providedIn: 'root',
})
export class TagService extends ApiService {
  constructor(http: HttpClient, global: GlobalProvider) {
    super(http, global);
    this.setSettings({
      url: `${environment.API_PATH}${environment.API_PREFIX}/tag`,
      isDelete: true,
      isGet: true,
      isPost: true,
      isPut: true,
    });
  }

  public CreateTag(createdTag: TagInterface) {
    return this.makeRequest('POST', { url: '', body: createdTag });
  }

  public GetTags() {
    return this.makeRequest('GET', { url: '' });
  }

  public UpdateTag(id: IdInteface, updatedTag: TagInterface) {
    return this.makeRequest('PUT', { url: `/${id}`, body: updatedTag });
  }

  public RemoveTag(id: IdInteface) {
    return this.makeRequest('DELETE', { url: `/${id}` });
  }
}
