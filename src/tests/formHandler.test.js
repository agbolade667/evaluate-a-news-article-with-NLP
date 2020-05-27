import { handleSubmit, fetchAylien } from '../client/js/formHandler';

describe('Test, the function "handleSubmit()" should exist' , () => {
    test('It should return true', async () => {
        expect(handleSubmit).toBeDefined();
    });
});

describe('Test, the function "handleSubmit()" should be a function', () => {
    test('It should be a function', async () => {
        expect (typeof handleSubmit).toBe('function');
    });
});

describe('Test, the function "fetchAylien()" should exist', () => {
    test('It should return true', async () => {
        expect(fetchAylien).toBeDefined();
    });
});