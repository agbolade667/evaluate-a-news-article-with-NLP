import { userUrl } from '../client/js/formHandler';

describe('Test, the import "userUrl" should exist', () => {
    test('It should return true', async () => {
        expect(typeof userUrl).toBeDefined();
    });
});