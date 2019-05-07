import { TestBed } from '@angular/core/testing';

import { GlobalProvider } from './global.service';

describe('GlobalService', () => {
    let Global: GlobalProvider;
    let num;
    let options;
    beforeAll(() => {
        Global = TestBed.get(GlobalProvider);
        num = Math.floor(Math.random() * (100 + 1)).toString();
        options = [
            {
                name: 'test',
                value: num,
            },
        ];
    });
    beforeEach(() => {
        TestBed.configureTestingModule({});
    });

    it('should be created', () => {
        expect(Global).toBeTruthy();
    });

    it('should has headers', () => {
        expect(Global.headers).not.toBeUndefined();
    });
    it('should Set and Get headers', () => {
        Global.setHeaders(options);
        expect(Global.headers.get('test')).toEqual(num);
    });
});
