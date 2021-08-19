import { RootState } from './app.store';
import { setStorage } from './app.service';
import { Plugin } from 'vuex';

/**
 * 本地存储
 */
export const localStorageStorePlugin: Plugin<RootState> = store => {
  store.subscribe(mutation => {
    switch (mutation.type) {
      case 'layout/setTheme':
        setStorage('theme', mutation.payload);
        break;
      case 'auth/login/setLoginResponseData':
        setStorage('nid', mutation.payload.token);
        break;
    }
  });
};
