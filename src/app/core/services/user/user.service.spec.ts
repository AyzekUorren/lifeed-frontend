import { UserService } from './user.service';
import { TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from '../../../../environments/environment.prod';
import { ApiSettings } from '../../intefaces/api/settings.inteface';

describe('UserService', () => {
    let data = { name: 'TestName', value: 'TestValue' };
    let service: UserService;
    let httpMock: HttpTestingController;
    const userSettings: ApiSettings = {
        url: `${environment.API_PATH}${environment.API_PREFIX}/user`,
        isDelete: true,
        isGet: true,
        isPost: true,
        isPut: true,
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UserService],
            imports: [HttpClientTestingModule],
        });
        service = TestBed.get(UserService);
        httpMock = TestBed.get(HttpTestingController);
    });
    afterEach(() => {
        httpMock.verify();
    });
    it('should makeRequest', done => {
        const user = { username: 'test@test.com', password: '12345' };

        service.GetUsers().subscribe(data => {
            expect(data).toBe(data);
            done();
        });

        const req = httpMock.expectOne(`${userSettings.url}/user`);
        expect(req.request.method).toEqual('GET');
        req.flush(data);
    });
});
