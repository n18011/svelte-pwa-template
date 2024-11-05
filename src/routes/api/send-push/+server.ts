import webpush from 'web-push';


webpush.setVapidDetails(
  'mailto:' + process.env.VITE_CONTACT_EMAIL,
  process.env.VITE_VAPID_PUBLIC_KEY,
  process.env.VITE_VAPID_PRIVATE_KEY
);

export const POST: RequestHandler = async ({ request }) => {
  try {
    const subscription = await request.json();
    
    await webpush.sendNotification(
      subscription,
      JSON.stringify({
        title: '新着メッセージ',
        body: 'プッシュ通知のテストです'
      })
    );
    
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 