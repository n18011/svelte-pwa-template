import { describe, it, expect, vi } from 'vitest';
import { POST } from './+server.js';
import webpush from 'web-push';

vi.mock('web-push', () => ({
  default: {
    setVapidDetails: vi.fn(),
    sendNotification: vi.fn()
  }
}));

describe('プッシュ通知送信API', () => {
  it('プッシュ通知が正常に送信されること', async () => {
    const mockSubscription = {
      endpoint: 'https://test-endpoint.com',
      keys: {
        p256dh: 'test-p256dh',
        auth: 'test-auth'
      }
    };

    const request = new Request('http://localhost/api/send-push', {
      method: 'POST',
      body: JSON.stringify(mockSubscription)
    });

    webpush.sendNotification.mockResolvedValue({});

    const response = await POST({ request } as any);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual({ success: true });
    expect(webpush.sendNotification).toHaveBeenCalledWith(
      mockSubscription,
      expect.any(String)
    );
  });

  it('エラー時に適切なレスポンスを返すこと', async () => {
    const mockSubscription = {
      endpoint: 'https://test-endpoint.com',
      keys: {
        p256dh: 'test-p256dh',
        auth: 'test-auth'
      }
    };

    const request = new Request('http://localhost/api/send-push', {
      method: 'POST',
      body: JSON.stringify(mockSubscription)
    });

    webpush.sendNotification.mockRejectedValue(new Error('Push service error'));

    const response = await POST({ request } as any);
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data).toEqual({ error: 'Push service error' });
  });
}); 