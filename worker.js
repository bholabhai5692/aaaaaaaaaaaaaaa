addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url);

  // केवल app-ads.txt पथ के लिए जांच करें
  if (url.pathname === '/app-ads.txt') {
    // अपनी फ़ाइल को सीधे Fetch करें
    const response = await fetch(request);

    // Response क्लोन करें ताकि हम इसे संशोधित कर सकें
    const newResponse = new Response(response.body, response);

    // Content-Type हेडर को text/plain पर सेट करें
    newResponse.headers.set('Content-Type', 'text/plain');

    return newResponse;
  }

  // अन्य सभी अनुरोधों को सामान्य रूप से जाने दें
  return fetch(request);
}
