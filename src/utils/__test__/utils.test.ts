import { clearSiteCache } from '../utils';

describe('clearSiteCache when window.caches is available', () => {
  const cacheKeys = ['key-1'];

  const mockCachesDelete = jest.fn(async (cacheName: string) => {
    return Promise.resolve(false);
  });

  const mockCaches: CacheStorage = {
    delete: (chachName: string) => mockCachesDelete(chachName),

    has(cacheName: string): Promise<boolean> {
      return Promise.resolve(false);
    },

    keys(): Promise<string[]> {
      return new Promise<string[]>((resolve, reject) => {
        resolve(cacheKeys);
      });
    },

    match(
      request: RequestInfo,
      options: MultiCacheQueryOptions | undefined,
    ): Promise<Response | undefined> {
      return Promise.resolve(undefined);
    },

    open(cacheName: string): Promise<Cache> {
      return Promise.resolve(new Cache());
    },
  };

  window = Object.assign(window, { navigator: jest.fn(), caches: mockCaches });

  const mockSWUnregister = jest.fn(async () => {
    return Promise.resolve(true);
  });

  beforeAll(() => {
    // @ts-ignore
    window.navigator['serviceWorker'] = {
      getRegisterations(): Promise<ReadonlyArray<ServiceWorkerRegistration>> {
        const registrations: ServiceWorkerRegistration[] = [
          {
            // @ts-ignore
            active: {
              scriptURL: 'sw.js',
            },
            unregister: mockSWUnregister,
          },
        ];
        return Promise.resolve(registrations);
      },
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should clear window cache', async () => {
    await clearSiteCache();
    expect(mockSWUnregister).toBeCalledTimes(cacheKeys.length);
  });
});
