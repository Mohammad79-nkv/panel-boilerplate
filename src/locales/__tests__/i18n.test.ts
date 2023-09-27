import { i18n } from '../i18n';
// import '@types/jest';

describe('i18n', () => {
    it('should initiate i18n', async () => {
        const t = i18n;
        expect(t).toBeDefined();
    })
})
