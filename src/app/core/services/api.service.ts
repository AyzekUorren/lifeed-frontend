import { ApiRequestInterface } from './../intefaces/api.request.inteface';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiSettings } from '../intefaces/api.settings.inteface';
import { GlobalProvider } from './global.service';

@Injectable()
export class ApiService {
  private setting: ApiSettings = {
    url: 'http://randomuser.me/api',
    isDelete: true,
    isGet: true,
    isPost: true,
    isPut: true,
  };

  constructor(private http: HttpClient, private global: GlobalProvider) {}

  public makeRequest(
    type: 'GET' | 'POST' | 'DELETE' | 'PUT',
    options: ApiRequestInterface,
  ): any {
    return this.sendRequest(type, options);
  }

  protected setSettings(setting: ApiSettings) {
    this.setting = setting;
  }

  private sendRequest(
    type: 'GET' | 'POST' | 'DELETE' | 'PUT',
    options: ApiRequestInterface,
  ): any {
    if (!this.setting) throw Error('Settings must init first, before use API');

    const params = this.createParams(options.params);
    const { body } = options;
    const url = this.setting.url + options.url;
    switch (type) {
      case 'POST': {
        if (this.setting.isPost) {
          return this.post(url, body, params);
        }
      }

      case 'DELETE': {
        if (this.setting.isDelete) {
          return this.delete(url, params);
        }
      }

      case 'PUT': {
        if (this.setting.isPut) {
          return this.put(url, body, params);
        }
      }

      case 'GET': {
        if (this.setting.isGet) {
          return this.get(url, params);
        }
      }

      default: {
        return new Error(
          `This method is not accepted for this API Route ${url}`,
        );
      }
    }
  }

  private createParams(
    params: {
      param: string;
      value: string | number;
    }[],
  ) {
    let httpParams = new HttpParams();
    if (params) {
      params.forEach(({ param, value }) => {
        httpParams = httpParams.set(param, value.toString());
      });
    }
    return httpParams;
  }

  private get(url: string, params: HttpParams): Observable<Object> {
    const headers = this.global.headers;
    return this.http.get(url, {
      headers,
      params,
    });
  }

  private post(
    url: string,
    body: any | null,
    params: HttpParams,
  ): Observable<Object> {
    const headers = this.global.headers;
    const options = {
      headers,
      params,
    };
    return this.http.post(url, body, options);
  }

  private delete(url: string, params: HttpParams): Observable<Object> {
    const headers = this.global.headers;
    const options = {
      headers,
      params,
    };
    return this.http.delete(url, options);
  }

  private put(
    url: string,
    body: any | null,
    params: HttpParams,
  ): Observable<Object> {
    const headers = this.global.headers;
    const options = {
      headers,
      params,
    };
    return this.http.put(url, body, options);
  }
}
