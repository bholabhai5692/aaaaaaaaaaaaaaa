export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Example: simple proxy ya redirect ya API bana sakte ho
    if (url.pathname === "/app-ads.txt") {
      return new Response(`google.com, pub-3747435193619543, RESELLER, f08c47fec0942fa0
unity.com, 716065659, DIRECT, f08c47fec0942fa0`, {
        headers: { "Content-Type": "text/plain" }
      });
    }

    // Default response (tum yahan apna game link, redirect ya HTML daal sakte ho)
    return new Response(`
      <!DOCTYPE html>
      <html>
        <head><title>Frog Game</title></head>
        <body style="text-align:center; padding:50px; font-family:sans-serif;">
          <h1>Frog Game Loading...</h1>
          <p>Agar game nahi dikh raha to Unity Ads setup complete hone ka wait karo :)</p>
        </body>
      </html>
    `, {
      headers: { "Content-Type": "text/html" }
    });
  },
};
