export function clearSiteCache(): Promise<void> {
  if (window.caches) {
    return window.caches
      .keys()
      .then(keyList => {
        return Promise.all(
          keyList.map(key => {
            return window.caches.delete(key);
          }),
        );
      })
      .then(() => {
        if (window.navigator && navigator.serviceWorker) {
          navigator.serviceWorker.getRegistrations().then(registrations => {
            if (registrations.length) {
              for (const registration of registrations) {
                if (registration.active) {
                  if (registration.active.scriptURL.endsWith('sw.js')) {
                    console.log('****************************');
                    console.log('Service Worker unregistered!');
                    console.log('****************************');
                    return registration.unregister();
                  }
                }
              }
            }
          });
        }
      });
  } else {
    return Promise.resolve().then(() => {
      if (window.navigator && navigator.serviceWorker) {
        navigator.serviceWorker.getRegistrations().then(registrations => {
          if (registrations.length) {
            for (const registration of registrations) {
              if (registration.active) {
                if (registration.active.scriptURL.endsWith('pwa/sw.js')) {
                  return registration.unregister();
                }
              }
            }
          }
        });
      }
    });
  }
}

export function clearLocalStorage(): void {
  return localStorage.clear();
}

export function clearAllSiteDataAndLogout(): Promise<void> {
  return clearSiteCache()
    .then(() => clearLocalStorage())
    .then(() =>
      window.location.replace(import.meta.env.VITE_APP_AUTH_URL as string),
    );
}
