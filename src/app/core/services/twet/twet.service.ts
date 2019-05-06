import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { GlobalProvider } from '../global.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { IdInteface } from '../../intefaces/api/id.inteface';
import { TwetInterface } from '../../intefaces/api/twet.interface';
import { TwetTagInterface } from '../../intefaces/api/twet-tag.interface';

@Injectable({
	providedIn: 'root'
})
export class TwetService extends ApiService {
	constructor(http: HttpClient, global: GlobalProvider) {
		super(http, global);
		this.setSettings({
			url: `${environment.API_PATH}${environment.API_PREFIX}/twet`,
			isDelete: true,
			isGet: true,
			isPost: true,
			isPut: true
		});
	}

	public CreateTag(createdTwet: TwetInterface) {
		return this.makeRequest('POST', { url: '', body: createdTwet });
	}

	public GetTwets() {
		return this.makeRequest('GET', { url: '' });
	}

	public UpdateTwet(id: IdInteface, updatedTwet: TwetInterface) {
		return this.makeRequest('PUT', { url: `/${id}`, body: updatedTwet });
	}

	public RemoveTwet(id: IdInteface) {
		return this.makeRequest('DELETE', { url: `/${id}` });
	}

	public AddTwetTag(updatedTwetTag: TwetTagInterface) {
		return this.makeRequest('PUT', { url: `/tag`, body: updatedTwetTag });
	}

	public RemoveTwetTag() {
		return this.makeRequest('DELETE', { url: `/tag` });
	}
}
