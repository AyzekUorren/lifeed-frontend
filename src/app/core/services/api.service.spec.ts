import { ApiSettings } from '../intefaces/api/settings.inteface';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
	let data = { name: 'TestName', value: 'TestValue' };
	let service: ApiService;
	let httpMock: HttpTestingController;
	const userSettings: ApiSettings = {
		url: 'http://randomuser.me/api',
		isDelete: true,
		isGet: true,
		isPost: true,
		isPut: true
	};

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ ApiService ],
			imports: [ HttpClientTestingModule ]
		});
		service = TestBed.get(ApiService);
		httpMock = TestBed.get(HttpTestingController);
	});
	afterEach(() => {
		httpMock.verify();
	});
	it('should makeRequest GET without params', (done) => {
		const options = {
			url: '/'
		};
		service.makeRequest('GET', options).subscribe((data) => {
			expect(data).toBe(data);
			done();
		});

		const req = httpMock.expectOne(`${userSettings.url}${options.url}`);
		expect(req.request.method).toEqual('GET');

		req.flush(data);
	});
	it('should makeRequest GET with params', (done) => {
		let results = {
			param: 'results',
			value: '50'
		};
		const options = {
			url: '/',
			params: [ results ]
		};
		service.makeRequest('GET', options).subscribe((data) => {
			expect(data).toBe(data);
			done();
		});

		const req = httpMock.expectOne(`${userSettings.url}${options.url}?${results.param}=${results.value}`);
		expect(req.request.method).toEqual('GET');

		req.flush(data);
	});
	it('should makeRequest POST without params', (done) => {
		const options = {
			url: '/'
		};
		service.makeRequest('POST', options).subscribe((data) => {
			expect(data).toBe(data);
			done();
		});
		const req = httpMock.expectOne(`${userSettings.url}${options.url}`);
		expect(req.request.method).toEqual('POST');
		req.flush(data);
	});
	it('should makeRequest POST with params', (done) => {
		let results = {
			param: 'results',
			value: '50'
		};
		const options = {
			url: '/',
			params: [ results ]
		};
		service.makeRequest('POST', options).subscribe((data) => {
			expect(data).toBe(data);
			done();
		});

		const req = httpMock.expectOne(`${userSettings.url}${options.url}?${results.param}=${results.value}`);
		expect(req.request.method).toEqual('POST');

		req.flush(data);
	});
	it('should makeRequest PUT without params', (done) => {
		const options = {
			url: '/'
		};
		service.makeRequest('PUT', options).subscribe((data) => {
			expect(data).toBe(null);
			done();
		});
		const req = httpMock.expectOne(`${userSettings.url}${options.url}`);
		expect(req.request.method).toEqual('PUT');
		req.flush(null);
	});
	it('should makeRequest PUT with params', (done) => {
		let results = {
			param: 'results',
			value: '50'
		};
		const options = {
			url: '/',
			params: [ results ]
		};
		service.makeRequest('PUT', options).subscribe((data) => {
			expect(data).toBe(null);
			done();
		});

		const req = httpMock.expectOne(`${userSettings.url}${options.url}?${results.param}=${results.value}`);
		expect(req.request.method).toEqual('PUT');

		req.flush(null);
	});
	it('should makeRequest DELETE without params', (done) => {
		const options = {
			url: '/'
		};
		service.makeRequest('DELETE', options).subscribe((data) => {
			expect(data).toBe(null);
			done();
		});
		const req = httpMock.expectOne(`${userSettings.url}${options.url}`);
		expect(req.request.method).toEqual('DELETE');
		req.flush(null);
	});
	it('should makeRequest DELETE with params', (done) => {
		let results = {
			param: 'results',
			value: '50'
		};
		const options = {
			url: '/',
			params: [ results ]
		};
		service.makeRequest('DELETE', options).subscribe((data) => {
			expect(data).toBe(data);
			done();
		});

		const req = httpMock.expectOne(`${userSettings.url}${options.url}?${results.param}=${results.value}`);
		expect(req.request.method).toEqual('DELETE');

		req.flush(null);
	});
});
