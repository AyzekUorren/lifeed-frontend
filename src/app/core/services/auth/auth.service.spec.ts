import { TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { environment } from '../../../../environments/environment.prod';
import { ApiSettings } from '../../intefaces/api/settings.inteface';

describe('AuthService', () => {
    let data = { name: 'TestName', value: 'TestValue' };
    let service: AuthService;
    let httpMock: HttpTestingController;
    const userSettings: ApiSettings = {
        url: `${environment.API_PATH}${environment.API_PREFIX}`,
        isDelete: true,
        isGet: true,
        isPost: true,
        isPut: true,
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthService],
            imports: [HttpClientTestingModule],
        });
        service = TestBed.get(AuthService);
        httpMock = TestBed.get(HttpTestingController);
    });
    afterEach(() => {
        httpMock.verify();
    });
    it('should makeRequest', done => {
        const user = { username: 'test@test.com', password: '12345' };

        service.SignIn(user).subscribe(data => {
            expect(data).toBe(data);
            done();
        });

        const req = httpMock.expectOne(`${userSettings.url}/signin`);
        expect(req.request.method).toEqual('POST');
        req.flush(data);
    });
});
