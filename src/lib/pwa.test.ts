import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { registerServiceWorker, subscribeToPushNotifications } from './pwa';

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
      
      await registerServiceWorker();
      
      expect(consoleError).toHaveBeenCalledWith(
        'Service worker registration failed:',
        expect.any(Error)
      );
    });
  });

  describe('プッシュ通知購読', () => {
    it('プッシュ通知の購読が正常に完了すること', async () => {
      const mockSubscription = { endpoint: 'test-endpoint' };
      const mockRegistration = {
        pushManager: {
          subscribe: vi.fn().mockResolvedValue(mockSubscription)
        }
      };

      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ success: true })
      });

      const subscription = await subscribeToPushNotifications(mockRegistration as any);

      expect(mockRegistration.pushManager.subscribe).toHaveBeenCalledWith({
        userVisibleOnly: true,
        applicationServerKey: expect.any(String)
      });
      expect(fetch).toHaveBeenCalledWith('/api/push-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mockSubscription)
      });
      expect(subscription).toBe(mockSubscription);
    });
  });
}); 