import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { registerServiceWorker } from './pwa';

describe('PWA機能のテスト', () => {
  beforeEach(() => {
    // Service Worker APIのモック
    vi.stubGlobal('navigator', {
      serviceWorker: {
        register: vi.fn(),
      }
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  describe('Service Worker登録', () => {
    it('Service Workerが正常に登録されること', async () => {
      const mockRegistration = {
        pushManager: {
          subscribe: vi.fn()
        }
      };
      
      navigator.serviceWorker.register = vi.fn().mockResolvedValue(mockRegistration);
      
      const registration = await registerServiceWorker();
      
      expect(navigator.serviceWorker.register).toHaveBeenCalledWith('/sw.js');
      expect(registration).toBe(mockRegistration);
    });

    it('Service Worker登録に失敗した場合エラーハンドリングされること', async () => {
      const consoleError = vi.spyOn(console, 'error');
      navigator.serviceWorker.register = vi.fn().mockRejectedValue(new Error('Registration failed'));
      
      const registration = await registerServiceWorker();
      
      expect(consoleError).toHaveBeenCalledWith(
        'Service worker registration failed:',
        expect.any(Error)
      );
      expect(registration).toBeNull();
    });
  });
}); 