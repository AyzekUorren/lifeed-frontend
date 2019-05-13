import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GlobalProvider {
  private _headers: HttpHeaders = new HttpHeaders();
  constructor() {}
  /**
   * Getter headers
   * @return {HttpHeaders}
   */
  public get headers(): HttpHeaders {
    return this._headers || null;
  }

  public setHeaders(options: { name: string; value: string }[]) {
    options.forEach(option => {
      this._headers = this._headers.set(option.name, option.value);
    });
  }
}
